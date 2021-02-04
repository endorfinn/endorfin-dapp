const address = "0x66C99F13cDc8700f75D998b92d40EE64eba2E1C1";

const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
				"name": "LINKprice",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "LINKtimeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "LINKroundID",
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
		"name": "getLatestLINK",
		"outputs": [
			{
				"internalType": "int256",
				"name": "LINKprice",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "LINKtimeStamp",
				"type": "uint256"
			},
			{
				"internalType": "uint80",
				"name": "LINKroundID",
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
