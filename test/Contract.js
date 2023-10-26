const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('FranchisingContract', () => {
  let franchiseContract;
  let deployer, company, franchisee;

  beforeEach(async () => {
    [deployer, company, franchisee] = await ethers.getSigners();

    const FranchisingContract = await ethers.getContractFactory('FranchisingContract');
    franchiseContract = await FranchisingContract.deploy();
    await franchiseContract.deployed();
  });

  it('should create a new franchise term', async () => {
    const title = 'Franchise Term 1';
    const description = 'Description of the franchise term';
    const duration = 30 * 24 * 60 * 60; // 30 days in seconds
    const fee = ethers.utils.parseEther('1'); // 1 Ether
    const companyAddress = company.address;
    const franchiseeAddress = franchisee.address;

    await franchiseContract.connect(company).createFranchiseTerm(
      title,
      description,
      duration,
      fee,
      companyAddress,
      franchiseeAddress
    );

    const term = await franchiseContract.franchiseTerms(0);
    expect(term.title).to.equal(title);
    expect(term.company).to.equal(companyAddress);
    expect(term.franchisee).to.equal(franchiseeAddress);
    // Add more checks for other fields
  });

  it('should not allow creating a franchise term with invalid data', async () => {
    // Try to create a term with missing data
    await expect(
      franchiseContract.connect(company).createFranchiseTerm('', '', 0, 0, ethers.constants.AddressZero, ethers.constants.AddressZero)
    ).to.be.revertedWith('revert');
  });
});
