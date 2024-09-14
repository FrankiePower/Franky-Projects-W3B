//require("@nomicfoundation/hardhat-verify");
require("@nomicfoundation/hardhat-ignition");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    // for testnet
    sepolia: {
      url: process.env.SEPOLIA_URL,
      accounts: [process.env.ACCOUNT_PRIVATE_KEY],
      gasPrice: 1000000000,
    },
  },
  etherscan: {
    // Use "123" as a placeholder, because Blockscout doesn't need a real API key, and Hardhat will complain if this property isn't set.
    apiKey: {
      sepolia: process.env.ETHERSCAN_APIKEY,
    },
  },
  sourcify: {
    enabled: false,
  },
};
