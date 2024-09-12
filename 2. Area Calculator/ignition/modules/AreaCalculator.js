const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("areaCalculatorModule", (m) => {
  const AreaCalculator = m.contract("areaCalculator");

  return { AreaCalculator };
});
