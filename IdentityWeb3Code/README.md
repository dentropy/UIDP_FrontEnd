``` javascript
var ethers = require('ethers');
var providers = require('ethers').providers;
var provider = new providers.JsonRpcProvider('http://localhost:9545');

var privateKey = "0x8aaa18df6dfc4a35ef107244933dffae37c1eac074417d5fb897fc9d04e9c960";
var wallet = new ethers.Wallet(privateKey);

var address = "0x2ff56aa712a0e3ae72fcc0a3da8d1f3856d93250";
var abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userID",
				"type": "bytes32"
			},
			{
				"name": "_position",
				"type": "uint16"
			},
			{
				"name": "_issuerID",
				"type": "bytes32"
			},
			{
				"name": "_certID",
				"type": "bytes16"
			}
		],
		"name": "acceptToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userID",
				"type": "bytes32"
			},
			{
				"name": "_position",
				"type": "uint16"
			},
			{
				"name": "_IPFSDomain",
				"type": "string"
			}
		],
		"name": "addIPFSDomain",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userID",
				"type": "bytes32"
			},
			{
				"name": "_position",
				"type": "uint16"
			},
			{
				"name": "newPublicKey",
				"type": "address"
			}
		],
		"name": "addPublicKey",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userID",
				"type": "bytes32"
			},
			{
				"name": "_position",
				"type": "uint16"
			},
			{
				"name": "_certID",
				"type": "bytes16"
			},
			{
				"name": "_metaData",
				"type": "string"
			}
		],
		"name": "addTokenMetaData",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_identityKey",
				"type": "bytes32"
			}
		],
		"name": "createIdentity",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userID",
				"type": "bytes32"
			},
			{
				"name": "_position",
				"type": "uint16"
			},
			{
				"name": "_issueIDTo",
				"type": "bytes32"
			},
			{
				"name": "_verifiedHASH",
				"type": "string"
			},
			{
				"name": "_encryptedIPFSLink",
				"type": "string"
			},
			{
				"name": "_validity",
				"type": "uint16"
			},
			{
				"name": "tokenID",
				"type": "bytes16"
			}
		],
		"name": "issueToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userID",
				"type": "bytes32"
			},
			{
				"name": "_position",
				"type": "uint16"
			},
			{
				"name": "_issueIDTo",
				"type": "bytes32"
			},
			{
				"name": "_validity",
				"type": "uint16"
			},
			{
				"name": "tokenID",
				"type": "bytes16"
			}
		],
		"name": "revokeIssuedToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userID",
				"type": "bytes32"
			},
			{
				"name": "_position",
				"type": "uint16"
			},
			{
				"name": "_issuerID",
				"type": "bytes32"
			},
			{
				"name": "_certID",
				"type": "bytes16"
			}
		],
		"name": "revokeToken",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_userID",
				"type": "bytes32"
			},
			{
				"name": "_position",
				"type": "uint16"
			},
			{
				"name": "_email",
				"type": "string"
			}
		],
		"name": "setEmail",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "email",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "identities",
		"outputs": [
			{
				"name": "accountAddress",
				"type": "address"
			},
			{
				"name": "valid",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes16"
			}
		],
		"name": "identityToken",
		"outputs": [
			{
				"name": "verifiedHASH",
				"type": "string"
			},
			{
				"name": "encryptedIPFSLink",
				"type": "string"
			},
			{
				"name": "validity",
				"type": "uint16"
			},
			{
				"name": "ownerAccepts",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "IndividualCredentials",
		"outputs": [
			{
				"name": "from",
				"type": "bytes32"
			},
			{
				"name": "name",
				"type": "bytes16"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "IPFSDomain",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "publicKeyToIdentity",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "bytes16"
			}
		],
		"name": "tokenMetadata",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "validIdentityKeys",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

var contract = new ethers.Contract(address, abi, provider);

var callPromise = contract.admin();
callPromise.then(function(value) {
    console.log('Single Return Value:' + value);
});


var callPromise = contract.createIdentity('0x12341234123412341234123412341234');
callPromise.then(function (value){
    console.log('Single Return Value:' + value);
});
var sendPromise = contract.createIdentity("0x12341234123412341234123412341234");


var callPromise = contract.validIdentityKeys('0x12341234123412341234123412341234');
callPromise.then(function (value){
    console.log('Single Return Value:' + value);
});
```