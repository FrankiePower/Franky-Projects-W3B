const { ethers } = require("hardhat");

const main = async () => {
  const nftContractInterface = [
    // Replace with your contract Interface. Example of the mint function ABI:
    "function mintNFT(address recipient, string memory tokenURI) public onlyOwner returns (uint256)",
  ];

  // Get a contract instance
  const nftContract = await ethers.getContractAt(
    nftContractInterface,
    nftContractAddress
  );

  async function interaction () {
  const StudentRecordContractAddress = "0x85dE0882112F798058a6819e0D51a863Ac80563A";
    
  }