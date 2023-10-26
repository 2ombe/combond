// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;



contract Verify {
    struct Review {
        string name;
        string comment;
        uint256 rating;
        address verifier;
    }

    Review[] public reviews;

    // Verifies the ownership of a company based on the provided signature
    function verifyCompany(address companyOwner, bytes memory signature) public view returns (bool) {
        // Hash the company owner's address
        bytes32 messageHash = keccak256(abi.encodePacked(msg.sender));
        // Prepend the Ethereum Signed Message prefix and hash it
        bytes32 ethSignedMessageHash = getEthSignedMessageHash(messageHash);

        // Recover the signer's address from the signature
        address recoveredSigner = recoverSigner(ethSignedMessageHash, signature);
        // Compare the recovered signer with the company owner's address
        return recoveredSigner == companyOwner;
    }

    // Prepends the Ethereum Signed Message prefix to a given message hash
    function getEthSignedMessageHash(bytes32 messageHash) private pure returns (bytes32) {
        return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", messageHash));
    }

    // Recovers the signer's address from a given message hash and signature
    function recoverSigner(bytes32 ethSignedMessageHash, bytes memory signature)
        private
        pure
        returns (address)
    {
        // Split the signature into its components: r, s, and v
        (bytes32 r, bytes32 s, uint8 v) = splitSignature(signature);
        // Recover the signer's address using ecrecover
        return ecrecover(ethSignedMessageHash, v, r, s);
    }

    // Splits a signature into its r, s, and v components
    function splitSignature(bytes memory signature)
        private
        pure
        returns (bytes32 r, bytes32 s, uint8 v)
    {
        // Ensure the signature has the correct length
        require(signature.length == 65, "Invalid signature length");

        assembly {
            // Extract the r value (first 32 bytes)
            r := mload(add(signature, 32))
            // Extract the s value (second 32 bytes)
            s := mload(add(signature, 64))
            // Extract the v value (final byte)
            v := byte(0, mload(add(signature, 96)))
        }

        // Adjust v if necessary (to be in the range of 27-28)
        if (v < 27) {
            v += 27;
        }

        return (r, s, v);
    }
}

contract Company {
    struct CompanyData {
        string companyName;
        string logo;
        string country;
        string category;
        string description;
        uint256 tin;
        address owner;
        bool verified;
    }

    CompanyData[] public companies;
    mapping(address => bool) public isAdmin;

    // Modifier to restrict access to only administrators
    modifier onlyAdmin() {
        require(isAdmin[msg.sender], "Only admin can perform this action");
        _;
    }

    // Create a new company
    function createCompany(
        string memory _companyName,
        string memory _logo,
        string memory _country,
        string memory _category,
        string memory _description,
        uint256 _tin,
        bool _verified
    ) external {
        // Create a new instance of CompanyData
        CompanyData memory newCompany = CompanyData(
            _companyName,
            _logo,
            _country,
            _category,
            _description,
            _tin,
            msg.sender,
            _verified
        );
        // Add the new company to the companies array
        companies.push(newCompany);
    }

    // Verify a company's ownership based on a provided signature
    function verifyCompany(uint256 companyId, bytes memory signature) external onlyAdmin {
        // Ensure the company ID is valid
        require(companyId < companies.length, "Invalid company ID");
        // Ensure the company is not already verified
        require(!companies[companyId].verified, "Company already verified");

        // Create an instance of the Verify contract
        Verify verifyContract = new Verify();
        // Verify the company's ownership using the Verify contract
        bool isVerified = verifyContract.verifyCompany(companies[companyId].owner, signature);
        // Ensure the company is successfully verified
        require(isVerified, "Company verification failed");

        // Set the verified status of the company to true
        companies[companyId].verified = true;
    }
}


contract User {
    struct UserData {
        string name;
        string email;
        string password;
        bool isAdmin;
    }

    UserData[] public users;

    // Create a new user
    function createUser(
        string memory _name,
        string memory _email,
        string memory _password,
        bool _isAdmin
    ) external {
        // Create a new instance of UserData
        UserData memory newUser = UserData(_name, _email, _password, _isAdmin);
        // Add the new user to the users array
        users.push(newUser);
    }
}
