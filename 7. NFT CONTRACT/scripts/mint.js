const { ethers } = require("hardhat");

async function main() {
  const nftContractAddress = "0x9Dc6AC213cA061a248E1FaFA90a312Be09c26189";
  const NFT = await ethers.getContractAt("INFT", nftContractAddress);

  const tokenUri =
    "https://gateway.pinata.cloud/ipfs/QmT9QsKbrQG3TTQndmqZwHYE9eED7fFB9oQsYzsF22o4R4";

  const recipient = "0xf1bEAAb3D518994d74248f01b862E9E01534d91D";
  const nftTx = await NFT.mintNFT(recipient, tokenUri);
  console.log("NFT Minted ::", nftTx);
  nftTx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
