const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
//const { ethers } = require("hardhat");

describe("Storage Contract", function () {
  async function deployStorageContract() {
    const Storage = await ethers.getContractFactory("Storage");
    const storage = await Storage.deploy();

    return { storage };
  }

  describe("Deployment", function () {
    it("should initialize with zero", async function () {
      const { storage } = await loadFixture(deployStorageContract);
      await storage.retrieve();
      expect(await storage.retrieve()).to.equal(0);
    });
  });

  describe("Deployment", function () {
    it("should store a number", async function () {
      const { storage } = await loadFixture(deployStorageContract);
      const num = 123456789;
      await storage.store(num);
      expect(await storage.retrieve()).to.equal(num);
    });
  });

  describe("Deployment", function () {
    it("should update the stored number", async function () {
      const { storage } = await loadFixture(deployStorageContract);
      await storage.store(100);
      await storage.store(200);
      expect(await storage.retrieve()).to.equal(200);
    });
  });

  describe("Deployment", function () {
    it("should retrieve the stored number", async function () {
      const { storage } = await loadFixture(deployStorageContract);
      const num = 123456789;
      await storage.store(num);
      expect(await storage.retrieve()).to.equal(num);
    });
  });
});
