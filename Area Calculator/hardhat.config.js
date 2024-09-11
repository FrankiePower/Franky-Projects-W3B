require("@nomicfoundation/hardhat-ignition");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

module.exports = {
  solidity: "0.8.12",
  // other configurations
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/2c7f6d8116fd45adb63c13f00c776087",
      accounts: [
        "0x375779fa4c55dacbab26e7315884a11e8404f31830a3afac7576bfdd568f608b",
      ],
    },
  },
};
