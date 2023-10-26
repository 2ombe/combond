// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.9;

contract FinancialComplianceContract {

    address public owner;
    mapping(address => bool) public isCompliant;

    event ComplianceStatusUpdated(address indexed account, bool isCompliant);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can perform this action");
        _;
    }

    

    constructor() {
        owner = msg.sender;
    }

    function updateComplianceStatus(address _account, bool _isCompliant) public onlyOwner {
        isCompliant[_account] = _isCompliant;
        emit ComplianceStatusUpdated(_account, _isCompliant);
    }
}
