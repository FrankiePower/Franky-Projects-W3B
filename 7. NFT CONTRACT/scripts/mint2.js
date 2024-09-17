const { hre, ethers } = require("hardhat");

const main = async () => {
  // Get 'MyNFT' contract
  const nftContractFactory = await ethers.getContractFactory("MyNFT");

  // Deploy contract
  const nftContract = await nftContractFactory.deploy();

  await nftContract.deployed();

  console.log("✅ Contract deployed to:", nftContract.target);

  // token URI that you want to mint
  const tokenURI = "ipfs://QmW1aypcYMt9P2aTXfa53ckHMCE5CBKNSwatZqnxZi857E"; // Token URI

  // Call the mint function from our contract
  const txn = await nftContract.mint(tokenURI);
  const txnReceipt = await txn.wait();

  // Get the token id of the minted NFT (using our event)
  // const event = txnReceipt.events?.find((event) => event.event === 'Minted');
  // const tokenId = event?.args['tokenId'];

  console.log(
    `'🎨 Your minted NFT:',
        https://testnets.opensea.io/assets/${nftContract.target}/`
  );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
