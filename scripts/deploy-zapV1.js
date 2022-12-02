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
  const PancakeZapV1Contract = await hre.ethers.getContractFactory("PancakeZapV1");
  const pancakeZapV1Contract = await PancakeZapV1Contract.deploy("0xB4F7213Fe1af451366764FDc6c241fEd0c5Dd533", "0x2cF8C2e1e8Ff0a118aD164bd4D0d9B7C175de25A", "50");

  await pancakeZapV1Contract.deployed();

  console.log("PancakeZapV1Contract deployed to:", pancakeZapV1Contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });