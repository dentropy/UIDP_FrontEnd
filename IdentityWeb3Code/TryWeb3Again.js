const fs = require('fs');
var Web3 = require('web3');
var web3 = new Web3();
var ContractSpec = JSON.parse(fs.readFileSync("ContractSpec.json"));

//var MyContract = web3.eth.contract(ContractSpec.abi);

// instantiate by address
//var contractInstance = MyContract.at(ContractSpec.address);

var IdentityContract = web3.eth.contract(ContractSpec.abi).at(ContractSpec.address);

IdentityContract.admin(function(err, result){console.log(result)})

IdentityContract.createIdentity('0x12341234123412341234123412341234', function (err, result){console.log(result)})

IdentityContract.validIdentityKeys('0x12341234123412341234123412341234', function (err, result){console.log(result)})


IdentityContract.identities('0x12341234123412341234123412341234', 0, function (err, result){console.log(result)})

var data = "NO DATA";
IdentityContract.publicKeyToIdentity(web3.eth.accounts[0], 0, function (err, result){data = result; console.log(result)})

IdentityContract.email(CredentialsObject[0].id, function(err, result){console.log(result)})

IdentityContract.createIdentity('0x12341234123412341234123412341234', function (err, result){console.log(result)})

IdentityContract.validIdentityKeys('0x12341234123412341234123412341234', function (err, result){console.log(result)})

IdentityContract.setEmail("0x12341234123412341234123412341234", 0, "bob@aol.com", function(err, result){console.log(result)})

IdentityContract.email("0x12341234123412341234123412341234", function(err, result){console.log(result)})