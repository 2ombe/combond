// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('User Identity Contract', function () {
//   let userIdentityContract;
//   let user;

//   beforeEach(async function () {
//     [user] = await ethers.getSigners();

//     const UserIdentity = await ethers.getContractFactory('UserIdentityContract');
//     userIdentityContract = await UserIdentity.deploy();
//     await userIdentityContract.deployed();
//   });

//   it('should register a new user identity', async function () {
//     const username = 'john_doe';
//     const email = 'john.doe@example.com';

//     // Register a new user identity
//     await userIdentityContract.registerUser(user.address, username, email);

//     // Retrieve the registered user identity details
//     const registeredUser = await userIdentityContract.users(user.address);

//     // Assert the user identity details
//     expect(registeredUser.username).to.equal(username);
//     expect(registeredUser.email).to.equal(email);
//     expect(registeredUser.isRegistered).to.equal(true);
//   });

//   it('should update an existing user identity', async function () {
//     const newUsername = 'john_doe_new';
//     const newEmail = 'john.doe@example.com.new';

//     // Register a new user identity
//     await userIdentityContract.registerUser(
//       user.address,
//       'john_doe',
//       'john.doe@example.com'
//     );

//     // Update the user identity
//     await userIdentityContract.updateUser(user.address, newUsername, newEmail);

//     // Retrieve the updated user identity details
//     const updatedUser = await userIdentityContract.users(user.address);

//     // Assert the updated user identity details
//     expect(updatedUser.username).to.equal(newUsername);
//     expect(updatedUser.email).to.equal(newEmail);
//   });

//   it('should unregister an existing user identity', async function () {
//     // Register a new user identity
//     await userIdentityContract.registerUser(
//       user.address,
//       'john_doe',
//       'john.doe@example.com'
//     );

//     // Unregister the user identity
//     await userIdentityContract.unregisterUser(user.address);

//     // Retrieve the unregistered user identity details
//     const unregisteredUser = await userIdentityContract.users(user.address);

//     // Assert that the user identity is unregistered
//     expect(unregisteredUser.isRegistered).to.equal(false);
//   });
// });
