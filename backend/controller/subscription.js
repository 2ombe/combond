const Web3 = require('web3');
const contractABI = require('./path/to/subscriptionManagementContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the SubscriptionManagementContract using the ABI and contract address
const subscriptionManagementContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to update a subscription
async function updateSubscription(subscriber, duration) {
  const accounts = await web3.eth.getAccounts();
  await subscriptionManagementContract.methods
    .updateSubscription(subscriber, duration)
    .send({ from: accounts[0] });
}

// Function to check if a subscriber has an active subscription
async function hasActiveSubscription(subscriber) {
  return await subscriptionManagementContract.methods
    .hasActiveSubscription(subscriber)
    .call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  updateSubscription,
  hasActiveSubscription,
};
