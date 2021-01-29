const { getWeb3 } = require("./getWeb3");
const { address, abi } = require("./contracts/poolPropasalFactoryContract");

const validateAddress = async (address) => {
    return await web3.utils.isAddress(address);
}

const makeProposalFactoryInstance = async () => {
    const web3 = await getWeb3();
    return await new web3.eth.Contract(abi, address);
}

const admin = "0xx";

const createProposal = async (
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

    let daiAddress = '';

    if (networkName === 'kovan') {
        daiAddress = "코반 주소";
    }

    const proposalFactoryInstance = await makeProposalFactoryInstance();

    const deployedProposalAddress = await proposalFactoryInstance.methods.createProposal(
        admin,
        proposer,
        proposalTokens.tokenAddress,
        proposalTokens.amount,
        totalTokenAmount,
        fundingStartTimestamp,
        fundingEndTimestamp,
        optionPrice,
        optionPremium,
        optionInterval,
        commission,
        name,
        symbol,
        daiAddress
    ).call.request({ from: proposer });

    return deployedProposalAddress;
}

exports.createProposal = createProposal;
