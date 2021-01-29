const address = "0x7A2c40D5744ff3556CE5d47f81b6dDD994effc36";

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
				"name": "standardTimeStamp",
				"type": "uint256"
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
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

module.exports = {
    address,
    abi
}
