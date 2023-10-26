const Web3 = require('web3');
const contractABI = require('./path/to/qualityAssuranceContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the QualityAssuranceContract using the ABI and contract address
const qualityAssuranceContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to add a quality assurance for a product or service
async function addQualityAssurance(productId, criteria) {
  const accounts = await web3.eth.getAccounts();
  await qualityAssuranceContract.methods
    .addQualityAssurance(productId, criteria)
    .send({ from: accounts[0] });
}

// Function to approve a quality assurance
async function approveQualityAssurance(productId) {
  const accounts = await web3.eth.getAccounts();
  await qualityAssuranceContract.methods
    .approveQualityAssurance(productId)
    .send({ from: accounts[0] });
}

// Function to get the quality assurance details for a product or service
async function getQualityAssurance(productId) {
  return await qualityAssuranceContract.methods
    .getQualityAssurance(productId)
    .call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  addQualityAssurance,
  approveQualityAssurance,
  getQualityAssurance,
};
