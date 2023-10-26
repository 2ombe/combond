const Web3 = require('web3');
const contractABI = require('./path/to/financialComplianceContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the FinancialComplianceContract using the ABI and contract address
const financialComplianceContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to update the compliance status of an account
async function updateComplianceStatus(account, isCompliant) {
  const accounts = await web3.eth.getAccounts();
  await financialComplianceContract.methods
    .updateComplianceStatus(account, isCompliant)
    .send({ from: accounts[0] });
}

// Export the function to be used in your backend routes or controllers
module.exports = {
  updateComplianceStatus,
};
