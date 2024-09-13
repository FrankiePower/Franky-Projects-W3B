const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("storagemodule", (m) => {
  const storageContract = m.contract("Storage");

  return { storageContract };
});
