const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("StudentRegistration Contract", function () {
  async function deployStudentRegFixture() {
    const StudentRecord = await ethers.getContractFactory("StudentRecord");

    const studentRecord = await StudentRecord.deploy();

    return { studentRecord };
  }

  describe("Adding Students", function () {
    /* To add a student, we must first generate a unique id, but we can't test for that because it's a private function. so then how then do we know if it works? we can add a number of students and check if their id's collide. */

    it("adds a student and emit an event", async function () {
      const { studentRecord } = await loadFixture(deployStudentRegFixture);

      const name = "Luffy";
      const age = 17;
      const course = "Pirate king";

      let capturedId;

      await expect(studentRecord.addStudent(name, age, course))
        .to.emit(studentRecord, "StudentAdded")
        .withArgs(
          (id) => {
            capturedId = id;
            return true; // Accept any ID
          },
          name,
          age,
          course
        );

      // Verify that an ID was captured
      expect(capturedId).to.not.be.undefined;

      // If you want to verify the stored data using the captured ID
      const [retrievedName, retrievedAge, retrievedCourse] =
        await studentRecord.getStudentRecord(capturedId);
      expect(retrievedName).to.equal(name);
      expect(retrievedAge).to.equal(age);
      expect(retrievedCourse).to.equal(course);
    });

    it("should generate unique IDs for multiple students", async function () {
      const { studentRecord } = await loadFixture(deployStudentRegFixture);

      const name = "Nami";
      const age = 16;
      const course = "Pirate Queen";

      const name2 = "robin";
      const age2 = 26;
      const course2 = "Queen";

      let capturedId;
      let capturedId2;

      await expect(studentRecord.addStudent(name, age, course))
        .to.emit(studentRecord, "StudentAdded")
        .withArgs(
          (id) => {
            capturedId = id;
            return true; // Accept any ID
          },
          name,
          age,
          course
        );

      await expect(studentRecord.addStudent(name2, age2, course2))
        .to.emit(studentRecord, "StudentAdded")
        .withArgs(
          (id) => {
            capturedId2 = id;
            return true; // Accept any ID
          },
          name2,
          age2,
          course2
        );

      expect(capturedId != capturedId2);
    });

    it("updates student record", async function () {
      const { studentRecord } = await loadFixture(deployStudentRegFixture);

      const initialData = { name: "Chopper", age: 7, course: "Best Doctor" };
      const updatedData = { name: "Brook", age: 60, course: "Best Doctor" };

      let capturedId;

      // Add initial student
      await expect(
        studentRecord.addStudent(
          initialData.name,
          initialData.age,
          initialData.course
        )
      )
        .to.emit(studentRecord, "StudentAdded")
        .withArgs(
          (id) => {
            capturedId = id;
            return true;
          },
          initialData.name,
          initialData.age,
          initialData.course
        );

      expect(capturedId).to.not.be.undefined;

      // Update student record
      await expect(
        studentRecord.updateStudent(
          capturedId,
          updatedData.name,
          updatedData.age,
          updatedData.course
        )
      ).to.not.be.reverted;

      // Verify updated data
      const [retrievedName, retrievedAge, retrievedCourse] =
        await studentRecord.getStudentRecord(capturedId);

      expect(retrievedName).to.equal(updatedData.name);
      expect(retrievedAge).to.equal(updatedData.age);
      expect(retrievedCourse).to.equal(updatedData.course);
    });

    it("should remove a student's record", async function () {
      const { studentRecord } = await loadFixture(deployStudentRegFixture);

      const ZoroData = { name: "Zoro", age: 17, course: "Best Swordsman" };

      let capturedId;

      // Add Zoro's data and capture the emitted ID
      await expect(
        studentRecord.addStudent(ZoroData.name, ZoroData.age, ZoroData.course)
      )
        .to.emit(studentRecord, "StudentAdded")
        .withArgs(
          (id) => {
            capturedId = id;
            return true; // Return true to assert that the ID is being captured
          },
          ZoroData.name,
          ZoroData.age,
          ZoroData.course
        );

      expect(capturedId).to.not.be.undefined;

      // Remove the student record using the captured ID
      await expect(studentRecord.removeStudentRecord(capturedId)).to.not.be
        .reverted;

      // Verify that attempting to retrieve the deleted student record results in a revert
      await expect(
        studentRecord.getStudentRecord(capturedId)
      ).to.be.revertedWith("Student does not exist.");
    });
  });
});
