// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.9;

contract ForexExchangeContract {
    // mapping to store the deposit balances for each currency
    mapping(bytes3 => uint256) public depositBalances;

    // Event emitted when a deposit is made
    event DepositMade(
        address indexed depositor,
        bytes3 indexed currency,
        uint256 amount
    );

    // function to make a deposit in a specific currency
    function makeDeposit(bytes3 _currency, uint256 _amount) external {
        require(_amount > 0, "invalid deposit amount");

        depositBalances[_currency] += _amount;

        emit DepositMade(msg.sender, _currency, _amount);
    }

    // function to exchange one currency for onother
    function exchangeCurrency(
        bytes3 _fromCurrency,
        uint256 _fromAmount,
        bytes3 _toCurrency,
        uint256 _toAmount
    ) external {
        require(_fromAmount > 0, "Invalid fromAmount");
        require(_toAmount > 0, "Invalid toAmount");

        require(
            depositBalances[_fromCurrency] >= _fromAmount,
            "Insufficient balance"
        );

        depositBalances[_fromCurrency] -= _fromAmount;
        depositBalances[_toCurrency] += _toAmount;
    }

    // Function to get the deposit balance for a specific currency
    function getDepositBalance(
        bytes3 _currency
    ) external view returns (uint256) {
        return depositBalances[_currency];
    }
}
