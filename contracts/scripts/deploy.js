 const hre = require("hardhat")

 
async function main() {
   try {
    const Contract = await hre.ethers.getContractFactory("Anonimity");
    const deploy = await Contract.deploy();

    await deploy.waitForDeployment();
    const address = await deploy.getAddress();
    console.log(`The contract is deployed on ${address}` );
   }catch(error){
    console.log("The error is : " , error);
    throw new Error("The contact is unabled to be depolyed");
   }
}


main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
  