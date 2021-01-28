const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getLatestBNB",
		"outputs": [
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "timeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "roundID",
				"type": "uint80"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestDAI",
		"outputs": [
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "timeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "roundID",
				"type": "uint80"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestETH",
		"outputs": [
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "timeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "roundID",
				"type": "uint80"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestEndorfinOracle",
		"outputs": [
			{
				"internalType": "int256",
				"name": "ETHprice",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "ETHtimeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "ETHroundID",
				"type": "uint80"
			},
			{
				"internalType": "int256",
				"name": "SNXprice",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "SNXtimeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "SNXroundID",
				"type": "uint80"
			},
			{
				"internalType": "int256",
				"name": "DAIprice",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "DAItimeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "DAIroundID",
				"type": "uint80"
			},
			{
				"internalType": "int256",
				"name": "BNBprice",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "BNBtimeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "BNBroundID",
				"type": "uint80"
			},
			{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLatestSNX",
		"outputs": [
			{
				"internalType": "int256",
				"name": "price",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "timeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "roundID",
				"type": "uint80"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const address = "0xb6007757649157e3dc3c44733b624bbee9202764";

module.exports = {
	abi,
	address
}
