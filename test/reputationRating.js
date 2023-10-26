// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('Reputation and Rating Contract', function () {
//   let reputationContract;
//   let userA;
//   let userB;

//   beforeEach(async function () {
//     [userA, userB] = await ethers.getSigners();

//     const Reputation = await ethers.getContractFactory('ReputationAndRatingContract');
//     reputationContract = await Reputation.deploy();
//     await reputationContract.deployed();
//   });

//   it('should allow user B to add a rating for user A', async function () {
//     const rating = 4;
//     const comment = "Great user!";

//     // User B adds a rating for user A
//     await reputationContract.addRating(userA.address, rating, comment);

//     // Retrieve the number of ratings for user A
//     const ratingsCount = await reputationContract.getUserRatingsCount(userA.address);

//     // Assert the ratings count
//     expect(ratingsCount).to.equal(1);

//     // Retrieve the added rating for user A
//     const [addedRatingValue, addedComment] = await reputationContract.getUserRating(userA.address, 0);

//     // Assert the added rating details
//     expect(addedRatingValue).to.equal(rating);
//     expect(addedComment).to.equal(comment);
//   });

//   it('should calculate the average rating for a user', async function () {
//     const rating1 = 4;
//     const rating2 = 5;
//     const rating3 = 3;

//     // User B adds ratings for user A multiple times
//     await reputationContract.addRating(userA.address, rating1, "Rating 1");
//     await reputationContract.addRating(userA.address, rating2, "Rating 2");
//     await reputationContract.addRating(userA.address, rating3, "Rating 3");

//     // Retrieve the average rating for user A
//     const averageRating = await reputationContract.getUserAverageRating(userA.address);

//     // Calculate the expected average rating
//     const expectedAverage = (rating1 + rating2 + rating3) / 3;

//     // Assert the average rating
//     expect(averageRating).to.equal(expectedAverage);
//   });
// });
