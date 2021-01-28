const { abi, address } = require('./oracleContract');
const cron = require('node-cron');
const { getWeb3 } = require('./getWeb3')
const coinOracleService = require('../services/coinOracle');

const callChainlinkOracle = async () => {
    const web3 = await getWeb3();
    const oracleInstance = await new web3.eth.Contract(abi, address);

    return await oracleInstance.methods.getLatestEndorfinOracle().call();
}

cron.schedule('2 * * * *', async () => {
    const { ETHprice,
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
        time
    } = await callChainlinkOracle()

    const param = {
        eth: {
            price: ETHprice,
            timeStamp: ETHtimeStamp,
            roundId: ETHroundID,
        },
        dai: {
            price: DAIprice,
            timeStamp: DAItimeStamp,
            roundId: DAIroundID,
        },
        bnb: {
            price: BNBprice,
            timeStamp: BNBtimeStamp,
            roundId: BNBroundID,
        },
        snx: {
            price: SNXprice,
            timeStamp: SNXtimeStamp,
            roundId: SNXroundID,
        },
        callTime: time
    }

    await coinOracleService.create(param.eth, param.dai, param.bnb, param.snx, param.callTime);
});
