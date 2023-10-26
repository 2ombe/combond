// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Bilateral Agreement Contract', function () {
//   let bilateralAgreementContract;
//   let partyA;
//   let partyB;

//   beforeEach(async function () {
//     [partyA, partyB] = await ethers.getSigners();

//     const BilateralAgreement = await ethers.getContractFactory('Bilateral');
//     bilateralAgreementContract = await BilateralAgreement.deploy();
//     await bilateralAgreementContract.deployed();
//   });

//   it('should add a new bilateral agreement', async function () {
//     const agreementId = 1;
//     const agreementDetails = 'Sample agreement details';
  
//     // Add a new bilateral agreement
//     await bilateralAgreementContract.addBilateralAgreement(
//       agreementId,
//       agreementDetails
//     );
  
//     // Retrieve the added bilateral agreement details
//     const addedAgreement = await bilateralAgreementContract.getBilateralAgreement(
//       agreementId
//     );
  
//     // Assert the bilateral agreement details
//     expect(addedAgreement).to.equal(agreementDetails);
//   });

//   it('should retrieve the correct agreement details', async function () {
//     const agreementId = 1;
//     const agreementDetails = 'Sample agreement details';
  
//     // Add a new bilateral agreement
//     await bilateralAgreementContract.addBilateralAgreement(
//       agreementId,
//       agreementDetails
//     );
  
//     // Retrieve the agreement details
//     const retrievedAgreement = await bilateralAgreementContract.getBilateralAgreement(
//       agreementId
//     );
  
//     // Assert the agreement details
//     expect(retrievedAgreement).to.equal(agreementDetails);
//   });
// });
