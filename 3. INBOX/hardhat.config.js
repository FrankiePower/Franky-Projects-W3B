require("@nomicfoundation/hardhat-ignition");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.4",
  // other configurations
  networks: {
    sepolia: {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [
        "0xa20ca6c555f231c801e23f0d359a24cb7d3637c51cb02c5b3be75faef8e4dee3",
      ],
    },
  },
};
