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


var callPromise = contract.admin();
callPromise.then(function(value) {
    console.log('Single Return Value:' + value);
});