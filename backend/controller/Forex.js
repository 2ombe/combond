const Web3 = require('web3');
const contractABI = require('./path/to/forexExchangeContractABI.json'); // Load the ABI
const contractAddress = '0x123456789...'; // Provide the actual contract address

// Create a new instance of the web3.js library and connect to the Ethereum network
const web3 = new Web3('https://ropsten.infura.io/v3/your-infura-project-id');

// Create an instance of the ForexExchangeContract using the ABI and contract address
const forexExchangeContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

// Function to make a deposit in a specific currency
async function makeDeposit(currency, amount) {
  const accounts = await web3.eth.getAccounts();
  await forexExchangeContract.methods
    .makeDeposit(currency, amount)
    .send({ from: accounts[0] });
}

// Function to exchange one currency for another
async function exchangeCurrency(
  fromCurrency,
  fromAmount,
  toCurrency,
  toAmount
) {
  const accounts = await web3.eth.getAccounts();
  await forexExchangeContract.methods
    .exchangeCurrency(fromCurrency, fromAmount, toCurrency, toAmount)
    .send({ from: accounts[0] });
}

// Function to get the deposit balance for a specific currency
async function getDepositBalance(currency) {
  return await forexExchangeContract.methods.getDepositBalance(currency).call();
}

// Export the functions to be used in your backend routes or controllers
module.exports = {
  makeDeposit,
  exchangeCurrency,
  getDepositBalance,
};
