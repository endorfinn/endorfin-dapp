const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');
const create = require('../services/coinOracle');

const createCoinOracle = async (req, res, next) => {
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
    coinOracle = await create(
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
