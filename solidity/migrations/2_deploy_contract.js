const EthChat = artifacts.require("EthChat");

module.exports = function (deployer) {
    deployer.deploy(EthChat);
};
