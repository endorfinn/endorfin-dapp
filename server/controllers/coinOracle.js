const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const coinOracleService = require('../services/coinOracle');

const getCoinOracle = async (req, res, next) => {
  const { callTime } = req.body;
  // TODO: validation 넣기
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
        new HttpError('Invalid params', 400),
    );
  }

  const coinOracle = await coinOracleService.get(callTime);

  if (!coinOracle.length) {
    return next(new HttpError('Could not find any coin oracle', 404));
  }

  res.json({ coinOracle })
}

const createCoinOracle = async (req, res, next) => {
  // TODO: validation 넣기
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid params', 400),
    );
  }

  const {
    eth, dai, bnb, snx, callTime
  } = req.body;

  let coinOracle;
  try {
    coinOracle = await coinOracleService.create(
        eth, dai, bnb, snx, callTime
    );
  } catch (err) {
    const error = new HttpError(
      'Creating coinOracle failed',
      500,
    );
    console.error(err);
    return next(error);
  }

  res.status(201).json({ coinOracle: coinOracle });
};

exports.createCoinOracle = createCoinOracle;
exports.getCoinOracle = getCoinOracle;
