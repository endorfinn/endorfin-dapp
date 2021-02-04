const admin = "0x0493a03E62b732d4bD454ff84B00cb68013d2EcC";

const createProposal = async (
        poolProposalFactoryInstance: any,
        networkName: string,
        proposer: string,
        proposalTokens: any,
        totalTokenAmount: number,
        fundingStartTimestamp: number,
        fundingEndTimestamp: number,
        optionPrice: number,
        optionPremium: number,
        optionInterval: number,
        commission: number,
        name: string,
        symbol: string,
    ) => {
       
    let daiAddress = '';
   
    if (networkName === 'kovan') {
        daiAddress = "0x366467d1baba04a22c944800725388191fa7f58b";
    }

    let _proposalTokens = [];
    let _proposalTokenMaximumAmounts = [];

    for (const token of proposalTokens) {
        _proposalTokens.push(token.tokenAddress);
        _proposalTokenMaximumAmounts.push(token.amount);
    }

    const transaction = await poolProposalFactoryInstance.methods.createProposal(
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
    ).send({ from: proposer });

    console.debug(transaction);

    return transaction;
}

export default createProposal;
