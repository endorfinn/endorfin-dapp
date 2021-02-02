const { time } = require("@openzeppelin/test-helpers");

// const RFT = artifacts.require("RFT.sol");
// const NFT = artifacts.require("NFT.sol");

const ERC20 = artifacts.require("DAI.sol");
const Proposal = artifacts.require("Proposal.sol");
const ProposalFactory = artifacts.require("ProposalFactory.sol");

const INITIAL_AMOUNT = web3.utils.toWei("100");

contract("RFT", async (addresses) => {
  const [admin, user1, user2, user3, optionBuyer1, optionBuyer2, _] = addresses;

  let dai = null;
  let link = null;
  let aave = null;

  let proposalFactory = null;
  let deployedProposals = null;
  let proposal_1 = null;

  it("creates three tokens: DAI, LINK, AAVE", async () => {
    dai = await ERC20.new("DAI Stablecoin", "DAI");
    link = await ERC20.new("Chainlink", "LINK");
    aave = await ERC20.new("Aave", "AAVE");

    console.log("DAI address: ", dai.address);
    console.log("link address: ", link.address);
    console.log("aave address: ", aave.address);
  });

  it("allocates tokens to users", async () => {
    await Promise.all([
      dai.mint(user1, INITIAL_AMOUNT),
      link.mint(user1, INITIAL_AMOUNT),
      aave.mint(user1, INITIAL_AMOUNT),

      dai.mint(user2, INITIAL_AMOUNT),
      link.mint(user2, INITIAL_AMOUNT),
      aave.mint(user2, INITIAL_AMOUNT),

      dai.mint(user3, INITIAL_AMOUNT),
      link.mint(user3, INITIAL_AMOUNT),
      aave.mint(user3, INITIAL_AMOUNT),

      dai.mint(optionBuyer1, INITIAL_AMOUNT),
      dai.mint(optionBuyer2, INITIAL_AMOUNT),
    ]);

    const user1DaiBalance = await dai.balanceOf(user1);
    const user1LinkBalance = await link.balanceOf(user1);
    const user1AaveBalance = await dai.balanceOf(user1);

    console.log("User1 - ", user1);
    console.log("User1 - DAI ", user1DaiBalance.toString());
    console.log("User1 - LINK ", user1LinkBalance.toString());
    console.log("User1 - AAVE ", user1AaveBalance.toString());

    const user2DaiBalance = await dai.balanceOf(user2);
    const user2LinkBalance = await link.balanceOf(user2);
    const user2AaveBalance = await dai.balanceOf(user2);

    console.log("User2 - ", user2);
    console.log("User2 - DAI ", user2DaiBalance.toString());
    console.log("User2 - LINK ", user2LinkBalance.toString());
    console.log("User2 - AAVE ", user2AaveBalance.toString());

    const user3DaiBalance = await dai.balanceOf(user3);
    const user3LinkBalance = await link.balanceOf(user3);
    const user3AaveBalance = await dai.balanceOf(user3);

    console.log("User3 - ", user3);
    console.log("User3 - DAI ", user3DaiBalance.toString());
    console.log("User3 - LINK ", user3LinkBalance.toString());
    console.log("User3 - AAVE ", user3AaveBalance.toString());

    const optionBuyer1Dai = await dai.balanceOf(optionBuyer1);
    console.log("OptionBuyer1 - ", optionBuyer1);
    console.log("OptionBuyer1 - DAI ", optionBuyer1Dai.toString());

    const optionBuyer2Dai = await dai.balanceOf(optionBuyer2);
    console.log("OptionBuyer1 - ", optionBuyer2);
    console.log("OptionBuyer1 - DAI ", optionBuyer2Dai.toString());
  });

  it("allocates tokens to users", async () => {
    proposalFactory = await ProposalFactory.new();

    console.log("Proposal factory address: ", proposalFactory.address);
  });

  it("creates a proposal", async () => {
    const startDate = new Date("2020-12-05").getTime();
    console.log(startDate);

    const endDate = new Date("2020-12-07").getTime();
    console.log(endDate);

    await proposalFactory.createProposal(
      admin, // _admin
      admin,
      [link.address, aave.address], // _tokens
      [web3.utils.toWei("10"), web3.utils.toWei("20")], // _amounts
      startDate, // _startDate
      endDate, // _endDate
      3, // _period
      10, // _optionPrice
      4, // _optionPremium
      7, // _optionInterval
      3 // _poolPeriod
    );

    deployedProposals = await proposalFactory.getDeployedProposals();
    console.log("deployedProposals: ", deployedProposals);
  });

  it("shows a 1st proposal description", async () => {
    proposal_1 = await Proposal.at(deployedProposals[0]);
    await proposal_1.setDaiAddress(dai.address);
    const isOpen = await proposal_1.getIsOpen();

    const proposer = await proposal_1.getProposer();

    const tokens = await proposal_1.getTokens();
    const amounts = await proposal_1.getAmounts();

    const period = await proposal_1.getPeriod();
    const optionPrice = await proposal_1.getOptionPrice();
    const optionPremium = await proposal_1.getOptionPremium();

    const startTimestamp = await proposal_1.getStartDate();
    const endTimestamp = await proposal_1.getEndDate();

    console.log("Admin: ", admin);
    console.log("Proposer: ", proposer);

    console.log("isOpen: ", isOpen.toString());
    console.log("tokens: ", tokens.toString());
    console.log("amounts: ", amounts.toString());
    console.log("period: ", period.toString());
    console.log("optionPrice: ", optionPrice.toString());
    console.log("optionPremium: ", optionPremium.toString());
    console.log("start timestamp: ", startTimestamp.toString());
    console.log("end timestamp: ", endTimestamp.toString());
  });

  it("User 1 enters a pool", async () => {
    let participants = await proposal_1.getParticipants();

    console.log("Participants before: ", participants.toString());

    proposal_1.enterPool(
      [link.address, aave.address],
      [web3.utils.toWei("5"), web3.utils.toWei("10")],
      { from: user1 }
    );

    participants = await proposal_1.getParticipants();

    console.log("Participants after: ", participants.toString());
  });

  it("User 2 enters a pool", async () => {
    let participants = await proposal_1.getParticipants();

    console.log("Participants before: ", participants.toString());

    proposal_1.enterPool(
      [link.address, aave.address],
      [web3.utils.toWei("5"), web3.utils.toWei("10")],
      { from: user2 }
    );

    participants = await proposal_1.getParticipants();

    console.log("Participants after: ", participants.toString());
  });

  it("checks allowances", async () => {
    await link.approve(proposal_1.address, web3.utils.toWei("5"), {
      from: user1,
    });

    await aave.approve(proposal_1.address, web3.utils.toWei("10"), {
      from: user1,
    });

    await link.approve(proposal_1.address, web3.utils.toWei("5"), {
      from: user2,
    });

    await aave.approve(proposal_1.address, web3.utils.toWei("10"), {
      from: user2,
    });

    const linkAllowanceOfUser1 = await link.allowance(
      user1,
      proposal_1.address
    );
    const aaveAllowanceOfUser1 = await aave.allowance(
      user1,
      proposal_1.address
    );

    console.log("linkAllowanceOfUser1: ", linkAllowanceOfUser1.toString());
    console.log("aaveAllowanceOfUser1: ", aaveAllowanceOfUser1.toString());

    //---------------------------------------------------------------------------------------
    const linkAllowanceOfUser2 = await link.allowance(
      user2,
      proposal_1.address
    );
    const aaveAllowanceOfUser2 = await aave.allowance(
      user2,
      proposal_1.address
    );

    console.log("linkAllowanceOfUser2: ", linkAllowanceOfUser2.toString());
    console.log("aaveAllowanceOfUser2: ", aaveAllowanceOfUser2.toString());
  });

  it("finalized a proposal", async () => {
    await proposal_1.finalizePool({ from: admin });

    const isOpen = await proposal_1.getIsOpen();
    console.log("isOpen: ", isOpen.toString());

    const linkBalance = await link.balanceOf(proposal_1.address);
    const aaveBalance = await aave.balanceOf(proposal_1.address);

    console.log("linkBalance: ", linkBalance.toString());
    console.log("aaveBalance: ", aaveBalance.toString());
  });

  it("buys an option", async () => {
    await dai.approve(proposal_1.address, web3.utils.toWei("10"), {
      from: optionBuyer1,
    });
    await proposal_1.buyOption({ from: optionBuyer1 });

    const daiBalanceOfBuyer1 = await dai.balanceOf(optionBuyer1);
    console.log("daiBalanceOfBuyer1: ", daiBalanceOfBuyer1.toString());
  });

  it("claims premium", async () => {
    await proposal_1.claimPremium({ from: optionBuyer1 });

    // const user1DaiBalance = await dai.balanceOf(user1);
  });

  it("liquidates all", async () => {
    await proposal_1.liquidatePool({ from: admin });
    const linkBalance = await link.balanceOf(proposal_1.address);
    const aaveBalance = await aave.balanceOf(proposal_1.address);

    console.log(linkBalance.toString());
    console.log(aaveBalance.toString());
  });

  // const nft = await NFT.new("My awesome NFT", "NFT");
  // await nft.mint(admin, 1);

  // const rft = await RFT.new(
  //   "My awesome RFT",
  //   "RFT",
  //   nft.address,
  //   1,
  //   1,
  //   web3.utils.toWei("100000"),
  //   dai.address
  // );

  // await nft.approve(rft.address, 1);
  // await rft.startIco();

  // await dai.approve(rft.address, DAI_AMOUNT, { from: buyer1 });
  // await rft.buyShare(SHARE_AMOUNT, { from: buyer1 });

  // await dai.approve(rft.address, DAI_AMOUNT, { from: buyer2 });
  // await rft.buyShare(SHARE_AMOUNT, { from: buyer2 });

  // await dai.approve(rft.address, DAI_AMOUNT, { from: buyer3 });
  // await rft.buyShare(SHARE_AMOUNT, { from: buyer3 });

  // await dai.approve(rft.address, DAI_AMOUNT, { from: buyer4 });
  // await rft.buyShare(SHARE_AMOUNT, { from: buyer4 });

  // await time.increase(7 * 86400 + 1);
  // await rft.withdrawProfits();

  // const balanceDAIBuyer1 = await dai.balanceOf(buyer1);

  // const balanceShareBuyer1 = await rft.balanceOf(buyer1);
  // const balanceShareBuyer2 = await rft.balanceOf(buyer2);
  // const balanceShareBuyer3 = await rft.balanceOf(buyer3);
  // const balanceShareBuyer4 = await rft.balanceOf(buyer4);

  // console.log(
  //   balanceShareBuyer1,
  //   balanceShareBuyer2,
  //   balanceShareBuyer3,
  //   balanceShareBuyer4
  // );

  // assert(balanceShareBuyer1.toString() === SHARE_AMOUNT);
  // assert(balanceShareBuyer2.toString() === SHARE_AMOUNT);
  // assert(balanceShareBuyer3.toString() === SHARE_AMOUNT);
  // assert(balanceShareBuyer4.toString() === SHARE_AMOUNT);

  // console.log("balanceDAIBuyer1: ", balanceDAIBuyer1.toString());
  // console.log("balanceShareBuyer1: ", balanceShareBuyer1.toString());
  // console.log("END buyer1");

  // console.log("balanceShareBuyer2: ", balanceShareBuyer2.toString());
  // console.log("balanceShareBuyer3: ", balanceShareBuyer3.toString());

  // const balanceAdminDai = await dai.balanceOf(admin);
  // assert(balanceAdminDai.toString() === web3.utils.toWei("100000"));

  // console.log("balanceAdminDai: ", balanceAdminDai.toString());
  //   console.log(addresses);
});
