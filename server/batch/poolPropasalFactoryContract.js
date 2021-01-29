const address = "0x3FfA29CDD5ACA81840dF74Aec93a3F6c3AA2C54E";

const abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_admin",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_proposer",
				"type": "address"
			},
			{
				"internalType": "address[]",
				"name": "_proposalTokens",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "_maximumAmounts",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256",
				"name": "_totalTokenAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fundingStartTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fundingEndTimestamp",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_optionPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_optionPremium",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_optionInterval",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_commission",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_symbol",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_daiAddress",
				"type": "address"
			}
		],
		"name": "createProposal",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "deployedProposals",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeployedProposals",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

exports.module = {
    address,
    abi
}
