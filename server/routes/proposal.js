const express = require('express');
const proposalControllers = require('../controllers/proposal');

const router = express.Router();

router.post('/', proposalControllers.createProposal);

module.exports = router;
