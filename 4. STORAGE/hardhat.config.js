require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    sepolia: {
      url: "https://rpc.sepolia-api.lisk.com",
      accounts: [
        "0xa20ca6c555f231c801e23f0d359a24cb7d3637c51cb02c5b3be75faef8e4dee3",
      ],
    },
  },
};
