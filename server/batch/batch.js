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
        LINKprice,
        LINKtimeStamp,
        LINKroundID,
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
        snx: {
            price: SNXprice,
            timestamp: SNXtimeStamp,
            roundId: SNXroundID,
        },
        link: {
            price: LINKprice,
            timestamp: LINKtimeStamp,
            roundId: LINKroundID, 
        },
        callTime: standardTimeStamp
    }

    const coinOracle = await coinOracleService.create(param.eth, param.dai, param.snx, param.link, param.callTime);
    console.debug(coinOracle);
});
