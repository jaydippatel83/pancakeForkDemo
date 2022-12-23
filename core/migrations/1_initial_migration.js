const PancakeFactory = artifacts.require("PancakeFactory");
const Token1 = artifacts.require("Token1");
const Token2 = artifacts.require("Token2");

module.exports= async function(deployer,network, address){
   await deployer.deploy(PancakeFactory,address[0]);
   const factory = await PancakeFactory.deployed();

   let token1Address, token2Address;
   if(network == 'mainnet'){
    token1Address = '';
    token2Address = '';
   } else{
    await deployer.deploy(Token1);
    await deployer.deploy(Token2)
    const token1 = await Token1.deployed();
    const token2 = await Token2.deployed();
    token1Address = token1.address;
    token2Address = token2.address;
   }

   await factory.createPair(token1Address,token2Address);
}