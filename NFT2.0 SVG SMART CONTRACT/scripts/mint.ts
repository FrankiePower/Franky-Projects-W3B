import { ethers } from "hardhat";

async function main() {
  const contractAddress = "0xDd857288a71b7522290Adb090d37f992912D43C7";
  const SVGNFT = await ethers.getContractFactory("SVGNFT");
  const svgNFT = SVGNFT.attach(contractAddress);

  const svgData = "./luffyg5 (1).svg";

  const tx = await svgNFT.createNFT(svgData);
  const receipt = await tx.wait();
  console.log("NFT minted:", receipt.logs[0].args[2].toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
