// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Payment Escrow Contract', function () {
//   let paymentEscrowContract;
//   let payer;
//   let payee;

//   beforeEach(async function () {
//     [payer, payee] = await ethers.getSigners();

//     const PaymentEscrow = await ethers.getContractFactory('PaymentEscrowContract');
//     paymentEscrowContract = await PaymentEscrow.deploy();
//     await paymentEscrowContract.deployed();
//   });

//   it('should create an escrow and complete it', async function () {
//     const paymentId = 1;
//     const paymentAmount = ethers.utils.parseEther('10');

//     // Create an escrow
//     await paymentEscrowContract.createEscrow(payee.address, { value: paymentAmount });

//     // Complete the escrow
//     await paymentEscrowContract.completeEscrow(paymentId);

//     // Retrieve the escrow details
//     const escrow = await paymentEscrowContract.escrows(paymentId);

//     // Assert the escrow state
//     expect(escrow.state).to.equal(1); // 1 corresponds to "Completed" state
//   });

//   it('should create an escrow and cancel it', async function () {
//     const paymentId = 1;
//     const paymentAmount = ethers.utils.parseEther('10');

//     // Create an escrow
//     await paymentEscrowContract.createEscrow(payee.address, { value: paymentAmount });

//     // Cancel the escrow
//     await paymentEscrowContract.cancelEscrow(paymentId);

//     // Retrieve the escrow details
//     const escrow = await paymentEscrowContract.escrows(paymentId);

//     // Assert the escrow state
//     expect(escrow.state).to.equal(2); // 2 corresponds to "Cancelled" state
//   });
// });
