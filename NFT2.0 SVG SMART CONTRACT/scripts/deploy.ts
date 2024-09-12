import { ethers } from "hardhat";

async function main() {
  const SVGNFT = await ethers.getContractFactory("SVGNFT");
  const svgNFT = await SVGNFT.deploy();

  await svgNFT.waitForDeployment();

  console.log("SVGNFT deployed to:", await svgNFT.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
