const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("StudentRegistrationModule", (m) => {
  const studentReg = m.contract("StudentRecord");

  return { studentReg };
});
