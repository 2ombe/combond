// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract LogisticCompanyContract {
    // Struct to store logistic company details
    struct LogisticCompany {
        address companyAddress;
        string name;
        string certification;
        bool isVerified;
    }

    // Mapping to store registered logistic companies
    mapping(address => LogisticCompany) public logisticCompanies;

    // Event emitted when a new logistic company is registered
    event LogisticCompanyRegistered(
        address indexed companyAddress,
        string name,
        string certification
    );

    // Function to register a new logistic company
    function registerLogisticCompany(
        string memory _name,
        string memory _certification
    ) external {
        require(bytes(_name).length > 0, "Invalid logistic company name");
        require(bytes(_certification).length > 0, "Invalid certification");
        require(
            logisticCompanies[msg.sender].companyAddress != msg.sender,
            "Logistic company already registered"
        );

        LogisticCompany memory newLogisticCompany = LogisticCompany(
            msg.sender,
            _name,
            _certification,
            false
        );
        logisticCompanies[msg.sender] = newLogisticCompany;

        emit LogisticCompanyRegistered(msg.sender, _name, _certification);
    }

    // Function to verify a logistic company's public key
    function verifyLogisticCompany(address _companyAddress) external {
        require(
            logisticCompanies[_companyAddress].companyAddress ==
                _companyAddress,
            "Logistic company not registered"
        );

        logisticCompanies[_companyAddress].isVerified = true;
    }

    // Function to get logistic company details by company address
    function getLogisticCompanyDetails(
        address _companyAddress
    ) external view returns (address, string memory, string memory, bool) {
        require(
            logisticCompanies[_companyAddress].companyAddress ==
                _companyAddress,
            "Logistic company not registered"
        );

        LogisticCompany memory logisticCompany = logisticCompanies[
            _companyAddress
        ];
        return (
            logisticCompany.companyAddress,
            logisticCompany.name,
            logisticCompany.certification,
            logisticCompany.isVerified
        );
    }
}
