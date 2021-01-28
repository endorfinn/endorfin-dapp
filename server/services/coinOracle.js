const CoinOracle = require('../models/coinOracle');

const create = async (eth, dai, bnb, snx, callTime) => {
  const coinOracle = new CoinOracle({
    eth, dai, bnb, snx, callTime
  });
  const result = await coinOracle.save();
  return result;
};

module.exports = create;
