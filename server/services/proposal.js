const Proposal = require('../models/proposal');
const { createProposal } = require("../web3/proposal");

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
    networkName
    ) => {

    const createdTransaction = await createProposal(
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
        networkName
    );
    
    console.debug(createdTransaction);

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
