pragma solidity ^0.7.3;

// import 'Token.sol';
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Proposal is ERC20 {
    // uint256 public poolTokenSupply;
    address admin;
    IERC20 DAI;

    // Proposal spec
    // address[] tokenAddresses;
    IERC20[] tokens;
    address public proposer;

    // uint256 poolPeriod;
    uint256[] amounts;
    uint256 startDate;
    uint256 endDate;
    uint256 period;
    uint256 optionPrice;
    uint256 optionPremium;
    uint256 optionInterval;
    uint256 commission;
    bool isOpen = true;

    // option buyer list
    address[] optionSellers;
    address[] optionBuyers;
    // token - amount pair
    // struct Pair {
    //     IERC20 token;
    //     uint256 amount;
    // }

    // Maximum amount of each token to enter
    // mapping(IERC20 => uint256) maxAmountMap;

    // Amount of each token collected
    mapping(IERC20 => uint256) collectedAmountMap;

    // participate - token
    // mapping(address => Pair[]) tokenMap;

    // participate - amount commited
    // mapping(address => uint256) amountMap;

    uint256 optionSellerTotalAmmount;

    // Option buyer - Dai commit ratio
    mapping(address => uint256) optionSellerPortionMap;

    uint256 optionBuyerTotalAmmount;

    // Option buyer - Dai commit ratio
    mapping(address => uint256) optionBuyerPortionMap;

    // option buyer - claimed amount
    mapping(address => uint256) claimedPoolTokens;

    constructor(
        address _admin,
        address _proposer,
        address[] memory _tokens,
        uint256[] memory _amounts,
        uint256 _startDate,
        uint256 _endDate,
        uint256 _period,
        uint256 _optionPrice,
        uint256 _optionPremium,
        uint256 _optionInterval,
        // uint _poolPeriod,
        uint256 _commission,
        string memory _name,
        string memory _symbol,
        address daiAddress
    ) public ERC20(_name, _symbol) {
        admin = _admin;
        proposer = _proposer;
        // tokenAddresses = _tokens;
        amounts = _amounts;
        startDate = _startDate;
        endDate = _endDate;
        period = _period;
        commission = _commission;
        optionPrice = _optionPrice;
        optionPremium = _optionPremium;
        optionInterval = _optionInterval;
        // poolPeriod = _poolPeriod;
        poolTokenSupply = 100;
        DAI = IERC20(daiAddress);

        for (uint256 i = 0; i < _tokens.length; i++) {
            tokens.push(IERC20(_tokens[i]));
            // maxAmountMap[IERC20(_tokens[i])] = _amounts[i];
        }
    }

    function enterPool(address[] memory _tokens, uint256[] memory _amounts)
        public
    {
        require(isOpen, "The pool proposal is already closed");
        require(block.timestamp < endDate, "The proposal is already expired");

        require(
            collectedAmountMap[IERC20(_tokens[0])] + _amounts[0] < amounts[0],
            "It's already full"
        );

        for (uint256 i = 0; i < _tokens.length; i++) {
            IERC20 token = IERC20(_tokens[i]);
            uint256 amount = _amounts[i];
            // token.approve(address(this), amount);

            // tokenMap[msg.sender].push(Pair({token: token, amount: amount}));

            collectedAmountMap[token] += amount;
        }

        //Close the pool if it's full
        if (collectedAmountMap[tokens[0]] >= amounts[0]) {
            isOpen = false;
        }

        optionBuyerTotalAmmount += _amounts[0];
        optionBuyerPortionMap[msg.sender] = _amounts[0];
        optionBuyers.push(msg.sender);
    }

    function sellOption(uint256 daiAmount) public {
        require(DAI.balanceOf(msg.sender) >= daiAmount, "Lack of DAI balance");

        require(
            optionSellerTotalAmmount + daiAmount < optionPrice,
            "It's already full"
        );

        optionSellerTotalAmmount += daiAmount;

        // float shareAmount = daiAmount / optionPrice;
        optionSellerPortionMap[msg.sender] = daiAmount;
        optionSellers.push(msg.sender);
    }

    function finalizePool() public {
        require(
            msg.sender == proposer || msg.sender == admin,
            "Only proposer can close the open proposal"
        );

        for (uint256 i = 0; i < optionBuyers.length; i++) {
            // IERC20 token = tokenMap[optionBuyers[i]];

            // Pair[] storage pairs = tokenMap[optionBuyers[i]];

            for (uint256 j = 0; j < tokens.length; j++) {
                IERC20 token = tokens[j];
                uint256 amount = amounts[j];
                token.transferFrom(optionBuyers[i], address(this), amount);
            }

            uint256 shareAmount = optionBuyerPortionMap[optionBuyers[i]] /
                amounts[0];
            uint256 poolTokenAmount = (poolTokenSupply - commission) *
                shareAmount;
            _mint(optionBuyers[i], poolTokenAmount);
        }

        for (uint256 i = 0; i < optionSellers.length; i++) {
            uint256 daiAmount = optionSellerPortionMap[optionSellers[i]];
            DAI.transferFrom(optionSellers[i], address(this), daiAmount);
        }

        isOpen = false;
    }

    function claimPremium() public {
        require(optionSellerPortionMap[msg.sender] > 0);

        // days -> unixtimestamps
        uint256 optionIntervalUnixtimestamp = optionInterval * 60 * 60 * 24;

        // elapse time in unixtimestamps
        uint256 diff = block.timestamp - endDate;

        // N possible claims
        uint256 mult = diff / optionIntervalUnixtimestamp;

        // Total possible claim amounts
        uint256 premium = (mult *
            optionPremium *
            optionSellerPortionMap[msg.sender]) / optionPrice;

        // Eligible claim amount
        uint256 eligibleClaimAmount = premium - claimedPoolTokens[msg.sender];

        require(eligibleClaimAmount > 0, "Nothing to claim");

        // Claim the eligible amount
        _mint(msg.sender, eligibleClaimAmount);
        // DAI.transfer(msg.sender, eligibleClaimAmount);

        claimedPoolTokens[msg.sender] += eligibleClaimAmount;
    }

    function liquidatePool() public {
        require(
            msg.sender == admin,
            "Only admin can liquidate the open proposal"
        );
        for (uint256 i = 0; i < optionBuyers.length; i++) {
            for (uint256 j = 0; j < tokens.length; j++) {
                IERC20 token = tokens[j];
                uint256 amount = amounts[j] *
                    (this.balanceOf(optionBuyers[i]) / 100);
                token.transfer(optionBuyers[i], amount);
            }

            _burn(optionBuyers[i], this.balanceOf(optionBuyers[i]));
        }

        for (uint256 i = 0; i < optionSellers.length; i++) {
            for (uint256 j = 0; j < tokens.length; j++) {
                IERC20 token = tokens[j];
                uint256 amount = amounts[j] *
                    (this.balanceOf(optionSellers[i]) / 100);

                token.transfer(optionSellers[i], amount);
            }
            uint256 daiAmount = optionSellerPortionMap[optionSellers[i]];
            DAI.transfer(optionSellers[i], daiAmount);
            _burn(optionSellers[i], this.balanceOf(optionSellers[i]));
        }

        isOpen = false;
    }

    function exerciseOption() public {
        require(msg.sender == admin, "Only admin can exercise option");

        for (uint256 i = 0; i < optionBuyers.length; i++) {
            DAI.transfer(
                optionBuyers[i],
                optionBuyerPortionMap[optionBuyers[i]] / amounts[0]
            );
            _burn(optionBuyers[i], this.balanceOf(optionBuyers[i]));
        }

        for (uint256 i = 0; i < optionSellers.length; i++) {
            for (uint256 j = 0; j < tokens.length; j++) {
                IERC20 token = tokens[j];
                uint256 amount = amounts[j] *
                    (optionSellerPortionMap[optionSellers[i]] /
                        optionSellerTotalAmmount);
                token.transfer(optionSellers[i], amount);
            }
        }
    }

    // function getTokens() public view returns (address[] memory) {
    //     return tokenAddresses;
    // }

    function getProposer() public view returns (address) {
        return proposer;
    }

    function getoptionBuyers() public view returns (address[] memory) {
        return optionBuyers;
    }

    function getPeriod() public view returns (uint256) {
        return period;
    }

    function getOptionPrice() public view returns (uint256) {
        return optionPrice;
    }

    function getOptionPremium() public view returns (uint256) {
        return optionPremium;
    }

    // function getPoolPeriod() public view returns (uint256) {
    //     return poolPeriod;
    // }

    function getOptionInterval() public view returns (uint256) {
        return optionInterval;
    }

    function getStartDate() public view returns (uint256) {
        return startDate;
    }

    function getEndDate() public view returns (uint256) {
        return endDate;
    }

    function getIsOpen() public view returns (bool) {
        return isOpen;
    }

    function getAmounts() public view returns (uint256[] memory) {
        return amounts;
    }

    // uint startDate;
    // uint endDate;
}