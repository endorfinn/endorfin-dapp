const Proposal = require('../models/proposal');

const create = async (
    proposer,
    proposalTokens,
    totalTokenAmount,
    fundingStartTimestamp,
    fundingEndTimestamp,
    optionPrice,
    optionPremium,
    optionInterval,
    commission,
    name,
    symbol,
    ) => {
    const proposal = new Proposal({
        proposer,
        proposalTokens,
        totalTokenAmount,
        fundingStartTimestamp,
        fundingEndTimestamp,
        optionPrice,
        optionPremium,
        optionInterval,
        commission,
        name,
        symbol,
    });
    const result = await proposal.save();
    return result;
};

exports.create = create;
