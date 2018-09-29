var ChocoToken = artifacts.require("./ChocoToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ChocoToken);
};
