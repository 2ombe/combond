// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CorporateRegistrationContract {
    // Struct to store corporate details
    struct Corporate {
        address corporateAddress;
        string name;
        string registrationNumber;
        bool isVerified;
    }

    // Mapping to store registered corporates
    mapping(address => Corporate) public registeredCorporates;

    // Event emitted when a new corporate is registered
    event CorporateRegistered(address indexed corporateAddress, string name, string registrationNumber);

    // Function to register a new corporate
    function registerCorporate(string memory _name, string memory _registrationNumber) external {
        require(bytes(_name).length > 0, "Invalid corporate name");
        require(bytes(_registrationNumber).length > 0, "Invalid registration number");

        require(registeredCorporates[msg.sender].corporateAddress != msg.sender, "Corporate already registered");

        Corporate memory newCorporate = Corporate(msg.sender, _name, _registrationNumber, false);
        registeredCorporates[msg.sender] = newCorporate;

        emit CorporateRegistered(msg.sender, _name, _registrationNumber);
    }

    // Function to verify a corporate's public key
    function verifyCorporate(address _corporateAddress) external {
        require(registeredCorporates[_corporateAddress].corporateAddress == _corporateAddress, "Corporate not registered");

        registeredCorporates[_corporateAddress].isVerified = true;
    }

    // Function to get corporate details by corporate address
    function getCorporateDetails(address _corporateAddress) external view returns (address, string memory, string memory, bool) {
        require(registeredCorporates[_corporateAddress].corporateAddress == _corporateAddress, "Corporate not registered");

        Corporate memory corporate = registeredCorporates[_corporateAddress];
        return (corporate.corporateAddress, corporate.name, corporate.registrationNumber, corporate.isVerified);
    }
}
