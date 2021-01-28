const express = require('express');
const coinControllers = require('../controllers/coinOracle');

const router = express.Router();

router.get('/', coinControllers.getCoinOracle);
router.post('/', coinControllers.createCoinOracle);

module.exports = router;
