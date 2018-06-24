var ethers = require('ethers');
var providers = require('ethers').providers;
const fs = require('fs');
var provider = new providers.JsonRpcProvider('http://localhost:9545');


var ContractSpec = JSON.parse(fs.readFileSync("ContractSpec.json"));
var privateKey = ContractSpec.privateKey;
var address = ContractSpec.address;
var abi = ContractSpec.abi
var wallet = new ethers.Wallet(privateKey, provider);


var contract = new ethers.Contract(address, abi, provider);


//MyContract.validIdentityKeys('0x12341234123412341234123412341234', function (err, result){console.log(result)})
var callPromise = contract.validIdentityKeys('0x72341234123412341234123412341234');

callPromise.then(function(value) {
    console.log('Single Return Value:' + value);
});