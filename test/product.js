// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('CompanyProduct Contract', function () {

// //     // Helper function to convert bytes32 strings to regular strings
// // function bytes32ArrayToStringArray(bytes32Array) {
// //     return bytes32Array.map(bytes32Str => ethers.utils.parseBytes32String(bytes32Str));
// //   }

//   let companyProduct;
//   let owner;
//   let company;
//   let productCount;

//   beforeEach(async function () {
//     [owner, company] = await ethers.getSigners();

//     const CompanyProduct = await ethers.getContractFactory('CompanyProduct');
//     companyProduct = await CompanyProduct.deploy();
//     await companyProduct.deployed();

//     productCount = await companyProduct.productCount();
//   });

//   it('should add a new product', async function () {
//     const productName = 'Test Product';
//     const productSlug = 'test-product';
//     const productImage = 'https://example.com/product.jpg';
   
//     const productBrand = 'Test Brand';
//     const productCategory = 'Test Category';
//     const productDescription = 'Test product description';
//     const productPrice = ethers.utils.parseEther('10');
//     const productCountInStock = 100;
//     const productRating = 4;

//     // Add a new product
//   // Convert the JavaScript array to a Solidity string array


// // Add a new product
// await companyProduct.addProduct(
//   productName,
//   productSlug,
//   productImage,
  
//   productBrand,
//   productCategory,
//   productDescription,
//   productPrice,
//   productCountInStock,
//   productRating,
//   company.address
// );


//     // Increment the product count
//     productCount++;



//     // Retrieve the added product details
// const addedProduct = await companyProduct.products(productCount - 1);



//     // Assert the product details
//     expect(addedProduct.name).to.equal(productName);
//     expect(addedProduct.slug).to.equal(productSlug);
//     expect(addedProduct.image).to.equal(productImage);
//     // Assert the images array
  
//     expect(addedProduct.brand).to.equal(productBrand);
//     expect(addedProduct.category).to.equal(productCategory);
//     expect(addedProduct.description).to.equal(productDescription);
//     expect(addedProduct.price).to.equal(productPrice);
//     expect(addedProduct.countInStock).to.equal(productCountInStock);
//     expect(addedProduct.rating).to.equal(productRating);
//     expect(addedProduct.createdBy).to.equal(company.address);
//     expect(addedProduct.numReviews).to.equal(0);
//     expect(addedProduct.reviews).to.deep.equal([]);
//     expect(addedProduct.company).to.equal(company.address);
//   });
// });
