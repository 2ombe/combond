// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ReputationAndRatingContract {
    struct Rating {
        uint256 ratingValue;
        string comment;
    }

    mapping(address => Rating[]) public ratings;

    event RatingAdded(address indexed user, uint256 ratingValue, string comment);

    function addRating(address _user, uint256 _ratingValue, string memory _comment) external {
        require(_ratingValue >= 1 && _ratingValue <= 5, "Invalid rating value");

        Rating memory rating = Rating(_ratingValue, _comment);
        ratings[_user].push(rating);

        emit RatingAdded(_user, _ratingValue, _comment);
    }

    function getUserRatingsCount(address _user) external view returns (uint256) {
        return ratings[_user].length;
    }

    function getUserRating(address _user, uint256 _index) external view returns (uint256, string memory) {
        require(_index < ratings[_user].length, "Invalid rating index");

        Rating memory rating = ratings[_user][_index];
        return (rating.ratingValue, rating.comment);
    }

    function getUserAverageRating(address _user) external view returns (uint256) {
        uint256 totalRatings = ratings[_user].length;
        if (totalRatings == 0) {
            return 0;
        }

        uint256 sum = 0;
        for (uint256 i = 0; i < totalRatings; i++) {
            sum += ratings[_user][i].ratingValue;
        }

        return sum / totalRatings;
    }
}
