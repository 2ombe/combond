// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Subscription Management Contract', function () {
//   let subscriptionManagementContract;
//   let user;

//   beforeEach(async function () {
//     [user] = await ethers.getSigners();

//     const SubscriptionManagement = await ethers.getContractFactory(
//       'SubscriptionManagementContract'
//     );
//     subscriptionManagementContract = await SubscriptionManagement.deploy();
//     await subscriptionManagementContract.deployed();
//   });

//   it('should update a user\'s subscription', async function () {
//     const subscriptionDuration = 30 * 24 * 60 * 60; // 30 days in seconds

//     // Update the user's subscription
//     await subscriptionManagementContract.updateSubscription(
//       user.address,
//       subscriptionDuration
//     );

//     // Check if the user has an active subscription
//     const hasActiveSub = await subscriptionManagementContract.hasActiveSubscription(user.address);

//     // Assert that the user has an active subscription
//     expect(hasActiveSub).to.equal(true);
//   });
// });
