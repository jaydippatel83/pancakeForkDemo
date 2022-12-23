const BonusToken = artifacts.require('BonusToken');
const Liquidity = artifacts.require("LiquidityMigrator");

module.exports = async function (deployer) {
    await deployer.deploy(BonusToken);
    const bonusToken = await BonusToken.deployed();
    const routerAddress = '';
    const pairAddress = '';
    const routerForkAddress = '';
    const pairForkAddress = '';

    await deployer.deploy(
        Liquidity,
        routerAddress,
        pairAddress,
        routerForkAddress,
        pairForkAddress,
        bonusToken.address
    );

    const liquidityMigrator = await Liquidity.deployed();
    await bonusToken.seLiquidator(liquidityMigrator.address);

}