// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

library ECDSA {

    function toEthSignedMessageHash(bytes32 messageHash) internal pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash));
    }

    function recover(bytes32 ethSignedMessageHash, bytes memory signature) internal pure returns (address) {
        require(signature.length == 65, "Invalid signature length");

        bytes32 r;
        bytes32 s;
        uint8 v;

        assembly {
            // Retrieve the first 32 bytes from the signature
            r := mload(add(signature, 0x20))
            // Retrieve the second 32 bytes from the signature
            s := mload(add(signature, 0x40))
            // Retrieve the last byte from the signature
            v := byte(0, mload(add(signature, 0x60)))
        }

        if (v < 27) {
            v += 27;
        }

        require(v == 27 || v == 28, "Invalid signature recovery");
        return ecrecover(ethSignedMessageHash, v, r, s);
    }
}

contract UserVerification {
    using ECDSA for bytes32;

    mapping(address => bool) public isAdmin;

    event UserVerified(address indexed user);

    function verifyUser(address _userAddress, bytes memory _signature) external {
        // Verify user by checking their signature
        bytes32 messageHash = keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", _userAddress));
        require(messageHash.recover(_signature) == _userAddress, "User verification failed");

        // Grant admin status to the verified user
        isAdmin[_userAddress] = true;

        emit UserVerified(_userAddress);
    }

    function getMessageHash(address _userAddress) public pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", _userAddress));
    }
}
