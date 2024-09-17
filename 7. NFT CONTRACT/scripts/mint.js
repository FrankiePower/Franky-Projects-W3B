const { ethers } = require("hardhat");

const main = async () => {
  // Replace with the correct contract ABI and deployed address
  const nftContractAddress = "0x85dE0882112F798058a6819e0D51a863Ac80563A";
  const nftContractInterface = [
    // Replace with your contract Interface. Example of the mint function ABI:
    "function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256)",
  ];

  // Get a contract instance
  const nftContract = await ethers.getContractAt(
    nftContractInterface,
    nftContractAddress
  );

  const recipient = "0x85dE0882112F798058a6819e0D51a863Ac80563A"; // Recipient address
  const tokenURI = "ipfs://QmW1aypcYMt9P2aTXfa53ckHMCE5CBKNSwatZqnxZi857E"; // Token URI

  // Call the mint function from the contract
  const txn = await nftContract.mintNFT(recipient, tokenURI);
  const txnReceipt = await txn.wait();

  console.log(
    `🎨 Your minted NFT: https://testnets.opensea.io/assets/${nftContractAddress}/${txnReceipt.events[0].args.tokenId.toString()}`
  );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
