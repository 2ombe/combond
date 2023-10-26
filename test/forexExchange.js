// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Forex Exchange Contract', function () {
//   let forexExchangeContract;
//   let user;

//   beforeEach(async function () {
//     [user] = await ethers.getSigners();

//     const ForexExchange = await ethers.getContractFactory('ForexExchangeContract');
//     forexExchangeContract = await ForexExchange.deploy();
//     await forexExchangeContract.deployed();
//   });

//   it('should allow depositing foreign currency', async function () {
//     const userAddress = user.address;
//     const foreignCurrency = ethers.utils.formatBytes32String('USD'); // Convert 'USD' to bytes3
//     const depositAmount = ethers.utils.parseEther('100');

//     // Deposit foreign currency
//     await forexExchangeContract.makeDeposit(
//       foreignCurrency,
//       depositAmount
//     );

//     // Retrieve the user's currency balance
//     const currencyBalance = await forexExchangeContract.getDepositBalance(
//       foreignCurrency
//     );

//     // Assert the currency balance
//     expect(currencyBalance).to.equal(depositAmount);
//   });

//   it('should allow exchanging foreign currency', async function () {
//     const userAddress = user.address;
//     const foreignCurrencyFrom = ethers.utils.formatBytes32String('USD'); // Convert 'USD' to bytes3
//     const foreignCurrencyTo = ethers.utils.formatBytes32String('EUR'); // Convert 'EUR' to bytes3
//     const exchangeAmount = ethers.utils.parseEther('50');

//     // Deposit foreign currency to exchange from
//     await forexExchangeContract.makeDeposit(
//       foreignCurrencyFrom,
//       exchangeAmount
//     );

//     // Exchange foreign currency
//     await forexExchangeContract.exchangeCurrency(
//       foreignCurrencyFrom,
//       exchangeAmount,
//       foreignCurrencyTo,
//       exchangeAmount
//     );

//     // Retrieve the user's currency balances
//     const balanceFrom = await forexExchangeContract.getDepositBalance(
//       foreignCurrencyFrom
//     );
//     const balanceTo = await forexExchangeContract.getDepositBalance(
//       foreignCurrencyTo
//     );

//     // Assert the currency balances
//     expect(balanceFrom).to.equal(exchangeAmount.sub(exchangeAmount));
//     expect(balanceTo).to.equal(exchangeAmount);
//   });
// });
