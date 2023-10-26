// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract QualityAssuranceContract {
    // Struct to store quality assurance details
    struct QualityAssurance {
        address verifier;
        string criteria;
        bool isApproved;
    }

    // Mapping to store quality assurance for each product or service
    mapping(uint256 => QualityAssurance) public qualityAssurances;

    // Event emitted when a quality assurance is approved
    event QualityAssuranceApproved(uint256 indexed productId, address indexed verifier, string criteria);

    // Function to add a quality assurance for a product or service
    function addQualityAssurance(uint256 _productId, string memory _criteria) external {
        require(bytes(_criteria).length > 0, "Invalid quality assurance criteria");
        require(!qualityAssurances[_productId].isApproved, "Quality assurance already added");

        QualityAssurance memory newQualityAssurance = QualityAssurance(msg.sender, _criteria, false);
        qualityAssurances[_productId] = newQualityAssurance;
    }

    // Function to approve a quality assurance
    function approveQualityAssurance(uint256 _productId) external {
        require(qualityAssurances[_productId].verifier == msg.sender, "Only the verifier can approve the quality assurance");

        qualityAssurances[_productId].isApproved = true;

        emit QualityAssuranceApproved(_productId, msg.sender, qualityAssurances[_productId].criteria);
    }

    // Function to get the quality assurance details for a product or service
    function getQualityAssurance(uint256 _productId) external view returns (address, string memory, bool) {
        QualityAssurance memory qa = qualityAssurances[_productId];
        return (qa.verifier, qa.criteria, qa.isApproved);
    }
}
