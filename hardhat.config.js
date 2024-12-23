require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.18",
  networks: {
    rinkeby: {
      url: process.env.INFURA_URL, // Add your Infura or Alchemy URL in .env
      accounts: [process.env.PRIVATE_KEY], // Add your private key in .env
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};