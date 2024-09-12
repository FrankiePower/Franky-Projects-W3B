import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const NFTModule = buildModule("NFTModule", (m) => {
  const NFT = m.contract("SVGNFT");

  return { NFT };
});

export default NFTModule;
