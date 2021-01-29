const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const proposalService = require('../services/proposal');

const createProposal = async (
    req, res, next
  ) => {
  // TODO: validation 넣기
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid params', 400),
    );
  }

  const {
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
  } = req.body;

  let proposal;
  try {
    proposal = await proposalService.create(
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
    );
  } catch (err) {
    const error = new HttpError(
      `Creating coinOracle failed. ${err}`,
      500,
    );
    console.error(err);
    return next(error);
  }

  res.status(201).json({ proposal: proposal });
};

exports.createProposal = createProposal;
