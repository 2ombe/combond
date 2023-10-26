const Web3 = require('web3');
const contractABI = require('./path/to/logisticCompanyContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the LogisticCompanyContract using the ABI and contract address
const logisticCompanyContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to register a new logistic company
async function registerLogisticCompany(name, certification) {
  const accounts = await web3.eth.getAccounts();
  await logisticCompanyContract.methods
    .registerLogisticCompany(name, certification)
    .send({ from: accounts[0] });
}

// Function to verify a logistic company's public key
async function verifyLogisticCompany(companyAddress) {
  const accounts = await web3.eth.getAccounts();
  await logisticCompanyContract.methods
    .verifyLogisticCompany(companyAddress)
    .send({ from: accounts[0] });
}

// Function to get logistic company details by company address
async function getLogisticCompanyDetails(companyAddress) {
  return await logisticCompanyContract.methods
    .getLogisticCompanyDetails(companyAddress)
    .call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  registerLogisticCompany,
  verifyLogisticCompany,
  getLogisticCompanyDetails,
};
