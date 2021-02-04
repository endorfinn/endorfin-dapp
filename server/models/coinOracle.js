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
  snx: {
    price: { type: Number },
    timestamp: { type: Number },
    roundId: { type: Number }
  },
  link: {
    price: { type: Number },
    timestamp: { type: Number },
    roundId: { type: Number } 
  },
  callTime: { type: Number },
});

module.exports = mongoose.model('CoinOracle', CoinOracleSchema);
