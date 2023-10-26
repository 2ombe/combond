// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.9;

contract PaymentEscrowContract {
    enum EscrowState {
        InProgress,
        Completed,
        Cancelled
    }

    struct Escrow {
        address payer;
        address payee;
        uint256 amount;
        EscrowState state;
    }

    mapping(uint256 => Escrow) public escrows;
    uint256 public escrowCount;

    event EscrowCreated(
        uint256 indexed escrowId,
        address indexed payer,
        address indexed payee,
        uint256 amount
    );
    event EscrowCompleted(uint256 indexed escrowId);
    event EscrowCancelled(uint256 indexed escrowId);

    modifier onlyPayer(uint256 _escrowId) {
        require(
            msg.sender == escrows[_escrowId].payer,
            "Only the payer can perform this action"
        );
        _;
    }

    modifier onlyPayee(uint256 _escrowId) {
        require(
            msg.sender == escrows[_escrowId].payee,
            "Only the payee can perform this action"
        );
        _;
    }

    function createEscrow(address _payee) external payable returns (uint256) {
        require(msg.value > 0, "Invalid escrow amount");

        uint256 newEscrowId = escrowCount;
        escrowCount++;

        Escrow storage escrow = escrows[newEscrowId];
        escrow.payer = msg.sender;
        escrow.payee = _payee;
        escrow.amount = msg.value;
        escrow.state = EscrowState.InProgress;

        emit EscrowCreated(
            newEscrowId,
            escrow.payer,
            escrow.payee,
            escrow.amount
        );

        return newEscrowId;
    }

    function completeEscrow(uint256 _escrowId) external onlyPayee(_escrowId) {
        Escrow storage escrow = escrows[_escrowId];
        require(
            escrow.state == EscrowState.InProgress,
            "Escrow is not in progress"
        );

        escrow.state = EscrowState.Completed;

        payable(escrow.payee).transfer(escrow.amount);

        emit EscrowCompleted(_escrowId);
    }

    function cancelEscrow(uint256 _escrowId) external onlyPayer(_escrowId) {
        Escrow storage escrow = escrows[_escrowId];
        require(
            escrow.state == EscrowState.InProgress,
            "Escrow is not in progress"
        );

        escrow.state = EscrowState.Cancelled;

        payable(escrow.payer).transfer(escrow.amount);

        emit EscrowCancelled(_escrowId);
    }
}
