// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Logistic Company Contract', function () {
//   let logisticCompanyContract;
//   let logisticCompany;

//   beforeEach(async function () {
//     [logisticCompany] = await ethers.getSigners();

//     const LogisticCompany = await ethers.getContractFactory('LogisticCompanyContract');
//     logisticCompanyContract = await LogisticCompany.deploy();
//     await logisticCompanyContract.deployed();
//   });

//   it('should register a new logistic company', async function () {
//     const companyName = 'Example Logistics';
//     const certification = 'Cert123';

//     // Register a new logistic company
//     await logisticCompanyContract.registerLogisticCompany(
//       companyName,
//       certification
//     );

//     // Retrieve the added logistic company details
//     const addedCompany = await logisticCompanyContract.logisticCompanies(
//       logisticCompany.address
//     );

//     // Assert the logistic company details
//     expect(addedCompany.name).to.equal(companyName);
//     expect(addedCompany.certification).to.equal(certification);
//   });

//   it('should not allow duplicate logistic company registration', async function () {
//     const companyName = 'Example Logistics';
//     const certification = 'Cert123';

//     // Register a new logistic company
//     await logisticCompanyContract.registerLogisticCompany(
//       companyName,
//       certification
//     );

//     // Attempt to register the same logistic company again
//     await expect(
//       logisticCompanyContract.registerLogisticCompany(
//         companyName,
//         certification
//       )
//     ).to.be.revertedWith('Logistic company already registered');
//   });

//   it('should verify a logistic company', async function () {
//     // Register a new logistic company
//     await logisticCompanyContract.registerLogisticCompany(
//       'Example Logistics',
//       'Cert123'
//     );

//     // Verify the registered logistic company
//     await logisticCompanyContract.verifyLogisticCompany(logisticCompany.address);

//     // Retrieve the logistic company details
//     const verifiedCompany = await logisticCompanyContract.logisticCompanies(
//       logisticCompany.address
//     );

//     // Assert that the company is now verified
//     expect(verifiedCompany.isVerified).to.equal(true);
//   });
// });
