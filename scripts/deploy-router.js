// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const PancakeRouterContract = await hre.ethers.getContractFactory("PancakeRouter");
  const pancakeRouterContract = await PancakeRouterContract.deploy("0x34E4064ef391cE16B4eb394D506bAF14b743491d", "0xB4F7213Fe1af451366764FDc6c241fEd0c5Dd533");

  await pancakeRouterContract.deployed();

  console.log("PancakeRouterContract deployed to:", pancakeRouterContract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });