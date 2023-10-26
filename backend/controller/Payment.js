const Web3 = require('web3');
const contractABI = require('./path/to/paymentEscrowContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the PaymentEscrowContract using the ABI and contract address
const paymentEscrowContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to create a new escrow
async function createEscrow(payee, amount) {
  const accounts = await web3.eth.getAccounts();
  const result = await paymentEscrowContract.methods
    .createEscrow(payee)
    .send({ from: accounts[0], value: amount });
  return result.events.EscrowCreated.returnValues;
}

// Function to complete an escrow
async function completeEscrow(escrowId) {
  const accounts = await web3.eth.getAccounts();
  await paymentEscrowContract.methods
    .completeEscrow(escrowId)
    .send({ from: accounts[0] });
}

// Function to cancel an escrow
async function cancelEscrow(escrowId) {
  const accounts = await web3.eth.getAccounts();
  await paymentEscrowContract.methods
    .cancelEscrow(escrowId)
    .send({ from: accounts[0] });
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  createEscrow,
  completeEscrow,
  cancelEscrow,
};
