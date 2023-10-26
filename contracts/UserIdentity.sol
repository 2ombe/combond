// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract UserIdentityContract {
    struct User {
        string firstName;
        string lastName;
        string nationalID;
        string phoneNumber;
    }

    mapping(address => User) public users;

    event UserRegistered(address indexed userAddress, string firstName, string lastName, string nationalID, string phoneNumber);

    function registerUser(string memory _firstName, string memory _lastName, string memory _nationalID, string memory _phoneNumber) external {
        require(bytes(_firstName).length > 0, "First name is required");
        require(bytes(_lastName).length > 0, "Last name is required");
        require(bytes(_nationalID).length > 0, "National ID is required");
        require(bytes(_phoneNumber).length > 0, "Phone number is required");

        User storage user = users[msg.sender];
        user.firstName = _firstName;
        user.lastName = _lastName;
        user.nationalID = _nationalID;
        user.phoneNumber = _phoneNumber;

        emit UserRegistered(msg.sender, _firstName, _lastName, _nationalID, _phoneNumber);
    }
}
