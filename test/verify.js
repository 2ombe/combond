// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Verify', () => {
//   let verifyContract;
//   let deployer, verifier;
//   let signer;

//   beforeEach(async () => {
//     [deployer, verifier, signer] = await ethers.getSigners();

//     const Verify = await ethers.getContractFactory('Verify');
//     verifyContract = await Verify.deploy();
//     await verifyContract.deployed();
//   });

//   it('should verify company ownership', async () => {
//     // Generate a signature using the signer's private key
//     const messageHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address'], [verifier.address]));
//     const signature = await signer.signMessage(ethers.utils.arrayify(messageHash));

//     // Call the verifyCompany function
//     const isVerified = await verifyContract.verifyCompany(verifier.address, signature);
//     expect(isVerified).to.equal(true);
//   });

//   it('should not verify company ownership with incorrect signature', async () => {
//     // Generate an incorrect signature
//     const messageHash = ethers.utils.keccak256(ethers.utils.defaultAbiCoder.encode(['address'], [verifier.address]));
//     const incorrectSignature = await deployer.signMessage(ethers.utils.arrayify(messageHash));

//     // Call the verifyCompany function with the incorrect signature
//     const isVerified = await verifyContract.verifyCompany(verifier.address, incorrectSignature);
//     expect(isVerified).to.equal(false);
//   });

//   it('should add a review', async () => {
//     const review = {
//       name: 'John Doe',
//       comment: 'Great company!',
//       rating: 5,
//       verifier: verifier.address
//     };

//     await verifyContract.reviews.push(review);

//     const storedReview = await verifyContract.reviews(0);
//     expect(storedReview.name).to.equal(review.name);
//     expect(storedReview.comment).to.equal(review.comment);
//     expect(storedReview.rating).to.equal(review.rating);
//     expect(storedReview.verifier).to.equal(review.verifier);
//   });
// });
