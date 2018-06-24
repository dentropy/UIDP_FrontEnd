var ethers = require('ethers');
var providers = require('ethers').providers;
const fs = require('fs');
var provider = new providers.JsonRpcProvider('http://localhost:9545');

var ContractSpec = JSON.parse(fs.readFileSync("ContractSpec.json"));
var privateKey = ContractSpec.privateKey;
var address = ContractSpec.address;
var abi = ContractSpec.abi
var wallet = new ethers.Wallet(privateKey, provider);


var contract = new ethers.Contract(address, abi, wallet);
var callPromise = contract.createIdentity('0x72341234123412341234123412341234');
callPromise.then(function (value){
    console.log('Single Return Value:' + value);
    for (var i = 0; i < Object.keys(value).length; i++){
        //console.log(i);
        //console.log(Object.keys(value)[i])
        console.log(value[Object.keys(value)[i]])
    }
});
