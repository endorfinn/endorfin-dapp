const { getWeb3 } = require("./getWeb3");
const { address, abi } = require("./contracts/poolPropasalFactoryContract");

const validateAddress = async (address) => {
    return await web3.utils.isAddress(address);
}

const makeProposalFactoryInstance = async () => {
    const web3 = await getWeb3();
    return await new web3.eth.Contract(abi, address);
}

const admin = "0x0493a03E62b732d4bD454ff84B00cb68013d2EcC";

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
        daiAddress = "0x366467d1baba04a22c944800725388191fa7f58b";
    }

    // kovan token address
    // const ethAddress = "0xc778417e063141139fce010982780140aa0cd5ab";
    // const snxAddress = "0x44d0bbe7e344d0da45d3b60d5038607b2c596365";
    // const bnbAddress = "0x4674e9587925f9fb4d3a4cc5591029596280e00c";

    const proposalFactoryInstance = await makeProposalFactoryInstance();

    let _proposalTokens = [];
    let _proposalTokenMaximumAmounts = [];

    for (const token of proposalTokens) {
        _proposalTokens.push(token.tokenAddress);
        _proposalTokenMaximumAmounts.push(token.amount);
    }

    const deployedProposalAddress = await proposalFactoryInstance.methods.createProposal(
        admin,
        proposer,
        _proposalTokens,
        _proposalTokenMaximumAmounts,
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
    ).call({ from: proposer });

    return deployedProposalAddress;
}

exports.createProposal = createProposal;
