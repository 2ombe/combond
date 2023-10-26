// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Bilateral {
    // Struct to store bilateral agreement details
    struct BilateralAgreement {
        string agreementText;
    }

    // Mapping to store bilateral agreements by country codes
    mapping(uint256 => BilateralAgreement) public bilateralAgreements;

    // Event emitted when a bilateral agreement is added
    event BilateralAgreementAdded(uint256 indexed countryCode, string agreementText);

    // Function to add a bilateral agreement
    function addBilateralAgreement(uint256 _countryCode, string memory _agreementText) external {
        require(bytes(_agreementText).length > 0, "Invalid agreement text");

        BilateralAgreement memory newBilateralAgreement = BilateralAgreement(_agreementText);
        bilateralAgreements[_countryCode] = newBilateralAgreement;

        emit BilateralAgreementAdded(_countryCode, _agreementText);
    }

    // Function to get the bilateral agreement details by country code
    function getBilateralAgreement(uint256 _countryCode) external view returns (string memory) {
        return bilateralAgreements[_countryCode].agreementText;
    }
}
