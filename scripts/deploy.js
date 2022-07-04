const { ethers } = require("hardhat")
async function main(){
  const CryptoBeetles = await ethers.getContractFactory("cryptoBeetles")
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET")

  try {
    await cryptoBeetles.deployed();
    console.log(`Contract succefully deployed to ${cryptoBeetles.address}`)
  }catch(err){
    console.log(`Errr: ${err.message}`)
  }
    try {
      const newItemId = await cryptoBeetles.mint("https://ipfs.io/ipfs/Qmet1eqFTFDGXAcytg8aPFxdNYNtmPmZWVond3tboaX2yM")
      console.log(`NFT mintes Successfully :: ${newItemId}`)
    }
    catch(err){
      conosle.log(`Minting Error : ${err.message}`)
    }
  }
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  
