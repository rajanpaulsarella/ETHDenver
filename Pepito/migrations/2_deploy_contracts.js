const PepitoDisguise = artifacts.require("PepitoDisguise");
const Pepito = artifacts.require("Pepito");

const path = require("path");

const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
const getAccount = require('../getAccount').getAccount

async function awaitWrapper(){
    let account_details = await getAccount()
    //console.log('hi:' + account_details.address)
    let account = account_details.address
    console.log(account)
}
awaitWrapper()

module.exports = function (deployer, network, account) {
  const userAddress = account;
  deployer.deploy(Pepito);
  deployer.deploy(PepitoDisguise, '0x04b903951CdC7c0C1A90A00c7bb6Ce1903836Ef5');
};
