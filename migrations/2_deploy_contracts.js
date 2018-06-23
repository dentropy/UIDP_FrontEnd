var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var Identity = artifacts.require("./Identity.sol");
var multisig = artifacts.require("./multisig.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Identity);
  deployer.deploy(multisig);
};
