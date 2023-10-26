// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Deal Contract', function () {
//   let dealContract;
//   let franchiser;
//   let franchisee;

//   beforeEach(async function () {
//     [franchiser, franchisee] = await ethers.getSigners();

//     const Deal = await ethers.getContractFactory('DealContract');
//     dealContract = await Deal.deploy();
//     await dealContract.deployed();
//   });

//   it('should propose and accept a new deal', async function () {
//     const manufacturer = franchisee.address;
//     const terms = 'Sample deal terms';

//     // Propose a new deal
//     await dealContract.proposeDeal(manufacturer, terms);

//     // Retrieve the proposed deal details
//     const dealId = 0;
//     const proposedDeal = await dealContract.deals(dealId);

//     // Assert the deal details
//     expect(proposedDeal.franchiser).to.equal(franchiser.address);
//     expect(proposedDeal.manufacturer).to.equal(manufacturer);
//     expect(proposedDeal.terms).to.equal(terms);
//     expect(proposedDeal.isAccepted).to.equal(false);

//     // Accept the proposed deal
//     await dealContract.acceptDeal(dealId);

//     // Retrieve the accepted deal details
//     const acceptedDeal = await dealContract.deals(dealId);

//     // Assert that the deal is now accepted
//     expect(acceptedDeal.isAccepted).to.equal(true);
//   });

//   it('should retrieve the correct total number of deals', async function () {
//     const manufacturer = franchisee.address;
//     const terms = 'Sample deal terms';

//     // Propose a new deal
//     await dealContract.proposeDeal(manufacturer, terms);

//     // Retrieve the total number of deals
//     const totalDeals = await dealContract.getTotalDeals();

//     // Assert the total number of deals
//     expect(totalDeals).to.equal(1);
//   });

//   it('should retrieve deal details by deal ID', async function () {
//     const manufacturer = franchisee.address;
//     const terms = 'Sample deal terms';

//     // Propose a new deal
//     await dealContract.proposeDeal(manufacturer, terms);

//     // Retrieve the deal details by deal ID
//     const dealId = 0;
//     const [franchiserAddress, manufacturerAddress, dealTerms, isAccepted] = await dealContract.getDealById(dealId);

//     // Assert the deal details
//     expect(franchiserAddress).to.equal(franchiser.address);
//     expect(manufacturerAddress).to.equal(manufacturer);
//     expect(dealTerms).to.equal(terms);
//     expect(isAccepted).to.equal(false);
//   });
// });
