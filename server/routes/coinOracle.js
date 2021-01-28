const express = require('express');
const coinControllers = require('../controllers/coinOracle');

const router = express.Router();

router.post('/', coinControllers.createCoinOracle);

module.exports = router;
