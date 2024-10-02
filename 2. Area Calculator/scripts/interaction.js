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
    const tx = await triangleArea.wait();
    console.log(tx);
    /*  // Calculate the area of a square
    const squareArea = await calculator.Square(5);
    const tx2 = await squareArea.wait();
    console.log(tx2);

    // Calculate the area of a rectangle
    const rectangleArea = await calculator.Rectangle(10, 5);
    const tx3 = await rectangleArea.wait();
    console.log(tx3); */
  } catch (error) {
    console.error("Error interacting with the contract:", error);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
