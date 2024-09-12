import { expect } from "chai";
import { ethers } from "hardhat";
import { Await } from "react-router-dom";

describe("AreaCalculator", function () {
  let AreaCalculator;
  let areaCalculator;
  let owner;

  beforeEach(async function () {
    // Deploy the smart contract before each test
    AreaCalculator = await ethers.getContractFactory("areaCalculator");
    owner = await AreaCalculator.deploy();
    await areaCalculator.deployed();
  });
});

describe("Area of a Triangle", function () {
  it("should calculate the area of a triangle", async function (params: type) {});
});
