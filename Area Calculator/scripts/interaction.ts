const { ethers } = require("hardhat");

async function main() {
  const areaCalculatorAddress = "0x64C8901d2daC9aC1DB39503E94DdAa53711d2A8c";

  // Get the contract factory
  const AreaCalculator = await ethers.getContractFactory("areaCalculator");

  // Attach to the deployed contract
  const calculator = await AreaCalculator.attach(areaCalculatorAddress);

  try {
    // Calculate the area of a triangle
    const triangleArea = await calculator.Triangle(10, 10);
    console.log("Raw Triangle Area:", triangleArea);
    console.log("Triangle Area Type:", typeof triangleArea);
    console.log("Is BigNumber:", ethers.BigNumber.isBigNumber(triangleArea));
    console.log("Triangle Area as string:", triangleArea.toString());
    console.log("Triangle Area as hex:", triangleArea.toHexString());

    // Calculate the area of a square
    const squareArea = await calculator.Square(5);
    console.log("Raw Square Area:", squareArea);
    console.log("Square Area Type:", typeof squareArea);
    console.log("Is BigNumber:", ethers.BigNumber.isBigNumber(squareArea));
    console.log("Square Area as string:", squareArea.toString());
    console.log("Square Area as hex:", squareArea.toHexString());

    // Calculate the area of a rectangle
    const rectangleArea = await calculator.Rectangle(10, 5);
    console.log("Raw Rectangle Area:", rectangleArea);
    console.log("Rectangle Area Type:", typeof rectangleArea);
    console.log("Is BigNumber:", ethers.BigNumber.isBigNumber(rectangleArea));
    console.log("Rectangle Area as string:", rectangleArea.toString());
    console.log("Rectangle Area as hex:", rectangleArea.toHexString());
  } catch (error) {
    console.error("Error interacting with the contract:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
