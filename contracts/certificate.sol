// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CertificateRegistry {
    mapping(address => bool) public authorizedAuthorities;

    struct Certificate {
        string name;
        uint256 issueDate;
        // Other certificate data
    }

    mapping(address => Certificate) public certificates;

    modifier onlyAuthorized() {
        require(authorizedAuthorities[msg.sender], "Not authorized");
        _;
    }

    function addAuthorizedAuthority(address authority) external {
        authorizedAuthorities[authority] = true;
    }

    function issueCertificate(address recipient, string memory name) external onlyAuthorized {
        certificates[recipient] = Certificate({
            name: name,
            issueDate: block.timestamp
        });
    }
}
