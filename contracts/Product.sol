// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.9;

contract CompanyProduct {
    struct Product {
        string name;
        string slug;
        string image;
        string brand;
        string category;
        string description;
        uint256 price;
        uint256 countInStock;
        uint256 rating;
        address createdBy;
        uint256 numReviews;
        string[] reviews;
        address company;
    }

    mapping(uint256 => Product) public products;
    uint256 public productCount;

    event ProductAdded(
        uint256 indexed productId,
        string name,
        string slug,
        string image,
        string brand,
        string category,
        string description,
        uint256 price,
        uint256 countInStock,
        uint256 rating,
        address indexed createdBy,
        uint256 numReviews,
        string[] reviews,
        address indexed company
    );

    function addProduct(
        string memory _name,
        string memory _slug,
        string memory _image,
        string memory _brand,
        string memory _category,
        string memory _description,
        uint256 _price,
        uint256 _countInStock,
        uint256 _rating,
        address _company
    ) external {
        require(bytes(_name).length > 0, "Product name is required");
        require(bytes(_slug).length > 0, "Product slug is required");
        require(bytes(_image).length > 0, "Product image is required");

        require(bytes(_brand).length > 0, "Product brand is required");
        require(bytes(_category).length > 0, "Product category is required");
        require(
            bytes(_description).length > 0,
            "Product description is required"
        );
        require(_price > 0, "Product price must be greater than zero");
        require(
            _countInStock > 0,
            "Product count in stock must be greater than zero"
        );
        require(
            _rating >= 0 && _rating <= 5,
            "Product rating must be between 0 and 5"
        );

        Product memory newProduct = Product(
            _name,
            _slug,
            _image,
            _brand,
            _category,
            _description,
            _price,
            _countInStock,
            _rating,
            msg.sender,
            0,
            new string[](0),
            _company
        );

        products[productCount] = newProduct;
        productCount++;

        emit ProductAdded(
            productCount - 1,
            _name,
            _slug,
            _image,
            _brand,
            _category,
            _description,
            _price,
            _countInStock,
            _rating,
            msg.sender,
            0,
            new string[](0),
            _company
        );
    }
}
