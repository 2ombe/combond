const Web3 = require('web3');
const contractABI = require('./path/to/bilateralAgreementContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the BilateralAgreementContract using the ABI and contract address
const bilateralAgreementContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to add a bilateral agreement
async function addBilateralAgreement(countryCode, agreementText) {
  const accounts = await web3.eth.getAccounts();
  await bilateralAgreementContract.methods
    .addBilateralAgreement(countryCode, agreementText)
    .send({ from: accounts[0] });
}

// Function to get the bilateral agreement details by country code
async function getBilateralAgreement(countryCode) {
  return await bilateralAgreementContract.methods
    .getBilateralAgreement(countryCode)
    .call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  addBilateralAgreement,
  getBilateralAgreement,
};
