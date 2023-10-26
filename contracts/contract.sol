// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract FranchisingContract {
    struct FranchiseTerm {
        string title;
        string description;
        uint256 duration; // In seconds
        uint256 fee; // In wei
        address company;
        address franchisee;
        bool isAccepted;
    }

    mapping(uint256 => FranchiseTerm) public franchiseTerms;
    uint256 public franchiseTermCount;

    event FranchiseTermCreated(
        uint256 indexed termId,
        string title,
        string description,
        uint256 duration,
        uint256 fee,
        address indexed company,
        address indexed franchisee
    );

    function createFranchiseTerm(
        string memory _title,
        string memory _description,
        uint256 _duration,
        uint256 _fee,
        address _company,
        address _franchisee
    ) external {
        require(bytes(_title).length > 0, "Franchise term title is required");
        require(bytes(_description).length > 0, "Franchise term description is required");
        require(_duration > 0, "Franchise term duration must be greater than zero");
        require(_fee > 0, "Franchise term fee must be greater than zero");
        require(_company != address(0), "Invalid company address");
        require(_franchisee != address(0), "Invalid franchisee address");

        FranchiseTerm memory newTerm = FranchiseTerm(_title, _description, _duration, _fee, _company, _franchisee, false);
        franchiseTerms[franchiseTermCount] = newTerm;
        franchiseTermCount++;

        emit FranchiseTermCreated(
            franchiseTermCount - 1,
            _title,
            _description,
            _duration,
            _fee,
            _company,
            _franchisee
        );
    }
}
