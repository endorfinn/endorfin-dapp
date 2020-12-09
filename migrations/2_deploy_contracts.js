var Proposal = artifacts.require("./Proposal.sol");
var ProposalFactory = artifacts.require("./ProposalFactory.sol");
var Dai = artifacts.require("./Dai.sol");

module.exports = function(deployer) {
  deployer.deploy(ProposalFactory);
};
