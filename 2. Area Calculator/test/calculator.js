const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const hre = require("hardhat");
const { expect } = require("chai");

describe("AreaCalculator", function () {
  async function deployAreaCalculator() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const AreaCalculator = await hre.ethers.getContractFactory(
      "areaCalculator"
    );
    const calculator = await AreaCalculator.deploy();

    return { calculator, owner, otherAccount };
  }

  describe("Triangle", function () {
    it("should calculate the area of a triangle", async function () {
      const { calculator } = await loadFixture(deployAreaCalculator);
      const base = 10;
      const height = 5;
      const expectedArea = Math.floor((base * height) / 2); // Adjust for integer division

      const tx = await calculator.Triangle(base, height);

      expect(await calculator.getArea()).to.equal(expectedArea);
    });
  });

  describe("Square", function () {
    it("should calculate the area of a square", async function () {
      const { calculator } = await loadFixture(deployAreaCalculator);
      const side = 4;
      const expectedArea = side * side;

      const tx = await calculator.Square(side);
      await tx.wait(); // Wait for the transaction to be mined

      const area = await calculator.getArea();
      expect(area).to.equal(expectedArea);
    });
  });

  describe("Rectangle", function () {
    it("should calculate the area of a rectangle", async function () {
      const { calculator } = await loadFixture(deployAreaCalculator);
      const length = 8;
      const width = 3;
      const expectedArea = length * width;

      const tx = await calculator.Rectangle(length, width);
      await tx.wait(); // Wait for the transaction to be mined

      const area = await calculator.getArea();
      expect(area).to.equal(expectedArea);
    });
  });

  describe("getArea", function () {
    it("should return the correct area after calculation", async function () {
      const { calculator } = await loadFixture(deployAreaCalculator);
      const side = 6;
      const expectedArea = side * side;

      const tx = await calculator.Square(side);
      await tx.wait(); // Wait for the transaction to be mined

      const area = await calculator.getArea();
      expect(area).to.equal(expectedArea);
    });
  });
});
