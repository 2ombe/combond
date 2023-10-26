// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract CopyrightCertificate {
    address public owner;

    struct Certificate {
        uint256 certificateId;
        string ownerName;
        string workTitle;
        uint256 timestamp;
    }

    event CertificateIssued(address indexed owner, uint256 indexed certificateId, string ownerName, string workTitle);

    mapping(uint256 => Certificate) public certificates;
    uint256 public lastCertificateId;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    constructor() {
        owner = msg.sender;
        lastCertificateId = 0;
    }

    function issueCertificate(string memory _ownerName, string memory _workTitle) public onlyOwner {
        lastCertificateId++;
        certificates[lastCertificateId] = Certificate(lastCertificateId, _ownerName, _workTitle, block.timestamp);
        emit CertificateIssued(msg.sender, lastCertificateId, _ownerName, _workTitle);
    }

    function getCertificate(uint256 _certificateId) public view returns (uint256, string memory, string memory, uint256) {
        Certificate memory certificate = certificates[_certificateId];
        return (certificate.certificateId, certificate.ownerName, certificate.workTitle, certificate.timestamp);
    }
}
