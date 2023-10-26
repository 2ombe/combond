const Web3 = require('web3');
const contractABI = require('./path/to/corporateRegistrationContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the CorporateRegistrationContract using the ABI and contract address
const corporateRegistrationContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to register a new corporate
async function registerCorporate(name, registrationNumber) {
  const accounts = await web3.eth.getAccounts();
  await corporateRegistrationContract.methods
    .registerCorporate(name, registrationNumber)
    .send({ from: accounts[0] });
}

// Function to verify a corporate's public key
async function verifyCorporate(corporateAddress) {
  const accounts = await web3.eth.getAccounts();
  await corporateRegistrationContract.methods
    .verifyCorporate(corporateAddress)
    .send({ from: accounts[0] });
}

// Function to get corporate details by corporate address
async function getCorporateDetails(corporateAddress) {
  return await corporateRegistrationContract.methods
    .getCorporateDetails(corporateAddress)
    .call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  registerCorporate,
  verifyCorporate,
  getCorporateDetails,
};
