const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("TodoModule", (m) => {
  const TODO = m.contract("Todo");

  return { TODO };
});
