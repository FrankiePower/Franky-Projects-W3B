const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const tokenAddress = "0xec0078347037ca55c6ab8da620853aec35d94483";

module.exports = buildModule("NFTModule", (m) => {
  const NFT = m.contract("MyNFT", [tokenAddress]);

  return { NFT };
});
