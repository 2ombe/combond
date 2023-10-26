// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('CorporateRegistrationContract', () => {
//   let corporateContract;
//   let deployer, corporate1, corporate2;

//   beforeEach(async () => {
//     [deployer, corporate1, corporate2] = await ethers.getSigners();

//     const CorporateRegistrationContract = await ethers.getContractFactory('CorporateRegistrationContract');
//     corporateContract = await CorporateRegistrationContract.deploy();
//     await corporateContract.deployed();
//   });

//   it('should register a new corporate', async () => {
//     const corporateName = 'Example Corp';
//     const registrationNumber = '123456';

//     await corporateContract.connect(corporate1).registerCorporate(corporateName, registrationNumber);

//     const corporateDetails = await corporateContract.getCorporateDetails(corporate1.address);
//     expect(corporateDetails[1]).to.equal(corporateName);
//     expect(corporateDetails[2]).to.equal(registrationNumber);
//     expect(corporateDetails[3]).to.equal(false);
//   });

//   it('should verify a corporate', async () => {
//     const corporateName = 'Example Corp';
//     const registrationNumber = '123456';

//     await corporateContract.connect(corporate1).registerCorporate(corporateName, registrationNumber);
//     await corporateContract.connect(deployer).verifyCorporate(corporate1.address);

//     const corporateDetails = await corporateContract.getCorporateDetails(corporate1.address);
//     expect(corporateDetails[3]).to.equal(true);
//   });

//   it('should not allow unregistered corporate to be verified', async () => {
//     await expect(
//       corporateContract.connect(deployer).verifyCorporate(corporate1.address)
//     ).to.be.revertedWith('Corporate not registered');
//   });

//   it('should get corporate details by corporate address', async () => {
//     const corporateName = 'Example Corp';
//     const registrationNumber = '123456';

//     await corporateContract.connect(corporate1).registerCorporate(corporateName, registrationNumber);

//     const corporateDetails = await corporateContract.getCorporateDetails(corporate1.address);
//     expect(corporateDetails[0]).to.equal(corporate1.address);
//     expect(corporateDetails[1]).to.equal(corporateName);
//     expect(corporateDetails[2]).to.equal(registrationNumber);
//     expect(corporateDetails[3]).to.equal(false);
//   });

//   it('should not allow duplicate corporate registration', async () => {
//     const corporateName = 'Example Corp';
//     const registrationNumber = '123456';

//     await corporateContract.connect(corporate1).registerCorporate(corporateName, registrationNumber);

//     await expect(
//       corporateContract.connect(corporate1).registerCorporate(corporateName, registrationNumber)
//     ).to.be.revertedWith('Corporate already registered');
//   });
// });
