const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("inboxmodule", (m) => {
  const inboxContract = m.contract("Inbox", ["Hello You!"]);
  return { inboxContract };
});
