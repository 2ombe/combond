// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('UserVerification Contract', function () {
//   let userVerification;
//   let owner;
//   let user;

//   beforeEach(async function () {
//     [owner, user] = await ethers.getSigners();

//     const UserVerification = await ethers.getContractFactory('UserVerification');
//     userVerification = await UserVerification.deploy();
//     await userVerification.deployed();
//   });

//   it('should verify a user and grant admin status', async function () {
//     const userAddress = user.address;

//     // Sign the user's address using their private key
//     const messageHash = await userVerification.getMessageHash(userAddress);
//     const signature = await user.signMessage(ethers.utils.arrayify(messageHash));

//     // Verify the user and grant admin status
//     await userVerification.verifyUser(userAddress, signature);

//     // Check if the user has been granted admin status
//     const isAdmin = await userVerification.isAdmin(userAddress);
//     expect(isAdmin).to.equal(true);
//   });

//   it('should reject an invalid signature', async function () {
//     const userAddress = user.address;

//     // Create an invalid signature
//     const invalidSignature = '0x1234567890abcdef';

//     // Verify the user with the invalid signature
//     await expect(userVerification.verifyUser(userAddress, invalidSignature)).to.be.reverted;
//   });
// });
