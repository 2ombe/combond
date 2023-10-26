const Web3 = require('web3');
const contractABI = require('./path/to/dealContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the DealContract using the ABI and contract address
const dealContract = new web3.eth.Contract(contractABI, contractAddress);

// Function to propose a new deal
async function proposeDeal(manufacturer, terms) {
  const accounts = await web3.eth.getAccounts();
  await dealContract.methods
    .proposeDeal(manufacturer, terms)
    .send({ from: accounts[0] });
}

// Function to accept a deal
async function acceptDeal(dealId) {
  const accounts = await web3.eth.getAccounts();
  await dealContract.methods.acceptDeal(dealId).send({ from: accounts[0] });
}

// Function to get the total number of deals
async function getTotalDeals() {
  return await dealContract.methods.getTotalDeals().call();
}

// Function to get deal details by deal ID
async function getDealById(dealId) {
  return await dealContract.methods.getDealById(dealId).call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  proposeDeal,
  acceptDeal,
  getTotalDeals,
  getDealById,
};
