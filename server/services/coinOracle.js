const CoinOracle = require('../models/coinOracle');

const get = async (callTime) => {
  const coinOracle = CoinOracle.find({ callTime: { $gte: callTime } }).exec();
  return coinOracle;
}

const create = async (eth, dai, snx, link, callTime) => {
  const coinOracle = new CoinOracle({
    eth, dai, snx, link, callTime
  });
  const result = await coinOracle.save();
  return result;
};

exports.create = create;
exports.get = get;
