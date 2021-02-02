const { abi, address } = require('../web3/contracts/oracleContract');
const cron = require('node-cron');
const { getWeb3 } = require('../web3/getWeb3')
const coinOracleService = require('../services/coinOracle');

const callChainlinkOracle = async () => {
    const web3 = await getWeb3();
    const oracleInstance = await new web3.eth.Contract(abi, address);

    return await oracleInstance.methods.getLatestEndorfinOracle().call();
}

cron.schedule('*/2 * * * *', async () => {
    const {
        ETHprice,
        ETHtimeStamp,
        ETHroundID,
        SNXprice,
        SNXtimeStamp,
        SNXroundID,
        DAIprice,
        DAItimeStamp,
        DAIroundID,
        BNBprice,
        BNBtimeStamp,
        BNBroundID,
        standardTimeStamp
    } = await callChainlinkOracle();

    const param = {
        eth: {
            price: ETHprice,
            timestamp: ETHtimeStamp,
            roundId: ETHroundID,
        },
        dai: {
            price: DAIprice,
            timestamp: DAItimeStamp,
            roundId: DAIroundID,
        },
        bnb: {
            price: BNBprice,
            timestamp: BNBtimeStamp,
            roundId: BNBroundID,
        },
        snx: {
            price: SNXprice,
            timestamp: SNXtimeStamp,
            roundId: SNXroundID,
        },
        callTime: standardTimeStamp
    }

    const coinOracle = await coinOracleService.create(param.eth, param.dai, param.bnb, param.snx, param.callTime);
    console.debug(coinOracle);
});
