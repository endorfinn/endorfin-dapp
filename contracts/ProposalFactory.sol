pragma solidity ^0.7.3;

import "./Proposal.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.1.0/contracts/token/ERC20/IERC20.sol";

// Proposal factory creates a new pool proposal by pool proposer
contract ProposalFactory {
    address[] public deployedProposals;

    function createProposal(
        address admin,
        address proposer,
        address[] memory tokens,
        uint256[] memory amounts,
        uint256 startDate,
        uint256 endDate,
        uint256 period,
        uint256 optionPrice,
        uint256 optionPremium,
        uint256 optionInterval,
        uint256 poolPeriod
    ) public {
        Proposal newProposal = new Proposal(
            admin,
            proposer,
            tokens,
            amounts,
            startDate,
            endDate,
            period,
            optionPrice,
            optionPremium,
            optionInterval,
            poolPeriod
        );
        deployedProposals.push(address(newProposal));
    }

    function getDeployedProposals() public view returns (address[] memory) {
        return deployedProposals;
    }
}
