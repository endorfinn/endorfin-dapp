const mongoose = require('mongoose');

const CoinOracleSchema = new mongoose.Schema({
  eth: {
    price: { type: Number },
    timestamp: { type: Number },
    roundId: { type: Number }
  },
  dai: {
    price: { type: Number },
    timestamp: { type: Number },
    roundId: { type: Number }
  },
  bnb: {
    price: { type: Number },
    timestamp: { type: Number },
    roundId: { type: Number }
  },
  snx: {
    price: { type: Number },
    timestamp: { type: Number },
    roundId: { type: Number }
  },
  callTime: { type: Number },
});

module.exports = mongoose.model('CoinOracle', CoinOracleSchema);
