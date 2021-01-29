const mongoose = require('mongoose');

const ProposalSchema = new mongoose.Schema({
    proposer: String,
    proposalTokens: [{
        tokenAddress: String,
        amount: Number
    }],
    totalTokenAmount: Number,
    fundingStartTimestamp: Number,
    fundingEndTimestamp: Number,
    optionPrice: Number,
    optionPremium: Number,
    optionInterval: Number,
    commission: Number,
    name: String,
    symbol: String,
});

module.exports = mongoose.model('Proposal', ProposalSchema);
