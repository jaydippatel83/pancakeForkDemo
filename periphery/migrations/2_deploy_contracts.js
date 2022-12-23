const Router = artifacts.require("PancakeRouter01");
const  WETH = artifacts.require("WETH"); 

module.exports= async function(deployer,network){
    let weth;
    const FACTORY_ADDRESS='0xa86ac9d57361B2957fA5b5640b9cF4701a31a40A';
    if(network === 'mainnet'){
      //WETH mainnet address
      weth = await WETH.at('0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2');
    } else{
      await deployer.deploy(WETH);
      weth = await WETH.deployed();
    }
    await deployer.deploy(Router,FACTORY_ADDRESS,weth.address);
}