// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Financial Compliance Contract', function () {
//   let financialComplianceContract;
//   let user;
//   let governmentAgency;

//   beforeEach(async function () {
//     [user, governmentAgency] = await ethers.getSigners();
  
//     const FinancialCompliance = await ethers.getContractFactory(
//       'FinancialComplianceContract'
//     );
//     financialComplianceContract = await FinancialCompliance.deploy(); // Remove the argument here
//     await financialComplianceContract.deployed();
//   });
  

//  // ... (imports and describe block) ...

// it('should allow government agency to set financial compliance status', async function () {
//     const userAddress = user.address;
//     const complianceStatus = true;
  
//     // Set financial compliance status by the government agency
//     await financialComplianceContract.updateComplianceStatus(
//       userAddress,
//       complianceStatus
//     );
  
//     // Retrieve the financial compliance status of the user
//     const isCompliant = await financialComplianceContract.isCompliant(userAddress);
  
//     // Assert the financial compliance status
//     expect(isCompliant).to.equal(complianceStatus);
//   });
  
//   it('should not allow non-government agency to set financial compliance status', async function () {
//     const userAddress = user.address;
//     const complianceStatus = true;
  
//     // Attempt to set financial compliance status by a non-government agency
//     await expect(
//         financialComplianceContract
//           .connect(user)  // Make sure you are using the owner here, not the user
//           .updateComplianceStatus(userAddress, complianceStatus)
//       ).to.be.revertedWith('Only the contract owner can perform this action');
      
//   });
  
//   it('should check if a user is financially compliant', async function () {
//     const userAddress = user.address;
//     const complianceStatus = true;
  
//     // Set financial compliance status by the government agency
//     await financialComplianceContract.updateComplianceStatus(
//       userAddress,
//       complianceStatus
//     );
  
//     // Check if the user is financially compliant
//     const isCompliant =
//       await financialComplianceContract.isCompliant(userAddress);
  
//     // Assert that the user is financially compliant
//     expect(isCompliant).to.equal(true);
//   });
  
//   it('should check if a user is not financially compliant', async function () {
//     const userAddress = user.address;
//     const complianceStatus = false;
  
//     // Set financial compliance status by the government agency
//     await financialComplianceContract.updateComplianceStatus(
//       userAddress,
//       complianceStatus
//     );
  
//     // Check if the user is financially compliant
//     const isCompliant =
//       await financialComplianceContract.isCompliant(userAddress);
  
//     // Assert that the user is not financially compliant
//     expect(isCompliant).to.equal(false);
//   });
  
// });
