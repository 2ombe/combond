// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.9;

contract DealContract {
    // Struct to store deal details
        //address public owner;
    struct Deal {
        address franchiser;
        address manufacturer;
        string terms;
        bool isAccepted;
    }

    //

    // Array to store all deals
    Deal[] public deals;

    // Event emitted when a new deal is created
    event DealCreated(uint indexed dealId, address indexed franchiser, address indexed manufacturer);

    // Function to propose a new deal
    function proposeDeal(address _manufacturer, string memory _terms) external {
        Deal memory newDeal = Deal(msg.sender, _manufacturer, _terms, false);
        uint dealId = deals.length;
        deals.push(newDeal);

        emit DealCreated(dealId, msg.sender, _manufacturer);
    }

    // Function to accept a deal
    function acceptDeal(uint _dealId) external {
        require(_dealId < deals.length, "Invalid deal ID");
        require(msg.sender == deals[_dealId].manufacturer, "Only the manufacturer can accept the deal");

        deals[_dealId].isAccepted = true;
    }

    // Function to get the total number of deals
    function getTotalDeals() external view returns (uint) {
        return deals.length;
    }

    // Function to get deal details by deal ID
    function getDealById(uint _dealId) external view returns (address, address, string memory, bool) {
        require(_dealId < deals.length, "Invalid deal ID");

        Deal memory deal = deals[_dealId];
        return (deal.franchiser, deal.manufacturer, deal.terms, deal.isAccepted);
    }
}
