// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('FranchisingContract', function () {
//   let franchisingContract;
//   let owner;
//   let company;
//   let franchisee;
//   let franchiseTermCount;

//   beforeEach(async function () {
//     [owner, company, franchisee] = await ethers.getSigners();

//     const FranchisingContract = await ethers.getContractFactory(
//       'FranchisingContract'
//     );
//     franchisingContract = await FranchisingContract.deploy();
//     await franchisingContract.deployed();

//     franchiseTermCount = await franchisingContract.franchiseTermCount();
//   });

//   it('should create a new franchise term', async function () {
//     const termTitle = 'Franchise Term 1';
//     const termDescription = 'Franchise Term Description';
//     const termDuration = 30 * 24 * 60 * 60; // 30 days in seconds
//     const termFee = ethers.utils.parseEther('1');

//     // Create a new franchise term
//     await franchisingContract.createFranchiseTerm(
//       termTitle,
//       termDescription,
//       termDuration,
//       termFee,
//       company.address,
//       franchisee.address
//     );

//     // Increment the franchise term count
//     franchiseTermCount++;

//     // Retrieve the added franchise term details
//     const addedTerm = await franchisingContract.franchiseTerms(
//       franchiseTermCount - 1
//     );

//     // Assert the franchise term details
//     expect(addedTerm.title).to.equal(termTitle);
//     expect(addedTerm.description).to.equal(termDescription);
//     expect(addedTerm.duration).to.equal(termDuration);
//     expect(addedTerm.fee).to.equal(termFee);
//     expect(addedTerm.company).to.equal(company.address);
//     expect(addedTerm.franchisee).to.equal(franchisee.address);
//     expect(addedTerm.isAccepted).to.equal(false);
//   });
// });
