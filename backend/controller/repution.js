const Web3 = require('web3');
const contractABI = require('./path/to/reputationAndRatingContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the ReputationAndRatingContract using the ABI and contract address
const reputationAndRatingContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to add a rating
async function addRating(userAddress, ratingValue, comment) {
  const accounts = await web3.eth.getAccounts();
  await reputationAndRatingContract.methods
    .addRating(userAddress, ratingValue, comment)
    .send({ from: accounts[0] });
}

// Function to get the number of ratings for a user
async function getUserRatingsCount(userAddress) {
  return await reputationAndRatingContract.methods
    .getUserRatingsCount(userAddress)
    .call();
}

// Function to get a user's rating at a specific index
async function getUserRating(userAddress, index) {
  return await reputationAndRatingContract.methods
    .getUserRating(userAddress, index)
    .call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  addRating,
  getUserRatingsCount,
  getUserRating,
};
