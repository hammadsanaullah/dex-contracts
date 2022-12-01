// require("@nomiclabs/hardhat-waffle");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-chai-matchers");
// require("hardhat-gas-reporter");
// require("hardhat-abi-exporter");
// require("solidity-coverage");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  gasReporter: {
    coinmarketcap: process.env.COIN_MARKETCAP_KEY,
    token: "BNB",
    gasPriceApi: "https://api.bscscan.com/api?module=proxy&action=eth_gasPrice",
    currency: "USD",
    enabled: false,
  },
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
      {
        version: "0.4.18",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99999,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      forking: {
        url: process.env.POLYGON_MAINNET_URL, //`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
        blockNumber: 23816790, // BSC: 13750041, Polygon: 23816790, Ethereum: 14021389
        enabled: true,
      },
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
      accounts: [`0x${process.env.RINKEBY_SECRET}`],
    },
    // ropsten: {
    //   url: `https://ropsten.infura.io/v3/${process.env.INFURA_KEY}`,
    //   accounts: [`0x${process.env.ROPSTEN_SECRET}`],
    // },
    bscMainnet: {
      url: "",
      chainId: 56,
      accounts: [`0x${process.env.RINKEBY_SECRET}`],
    },
    bscTestnet: {
      url: process.env.BSC_NODE_URL,
      chainId: 97,
      accounts: [`0x${process.env.RINKEBY_SECRET}`],
    },
    mumbai: {
      url: process.env.POLYGON_NODE_URL,
      chainId: 80001,
      accounts: [`0x${process.env.MUMBAI_SECRET}`],
    },
    polygon: {
      url: process.env.POLYGON_MAINNET_URL,
      chainId: 137,
      accounts: [`0x${process.env.POLYGON_SECRET}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
