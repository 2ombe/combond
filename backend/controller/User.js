const Web3 = require('web3');
const contractABI = require('./path/to/userIdentityContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the UserIdentityContract using the ABI and contract address
const userIdentityContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to register a new user
async function registerUser(firstName, lastName, nationalID, phoneNumber) {
  const accounts = await web3.eth.getAccounts();
  await userIdentityContract.methods
    .registerUser(firstName, lastName, nationalID, phoneNumber)
    .send({ from: accounts[0] });
}

// Function to retrieve user identity information
async function getUserInfo(userAddress) {
  return await userIdentityContract.methods.users(userAddress).call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  registerUser,
  getUserInfo,
};
