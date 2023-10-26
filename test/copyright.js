// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('CopyrightCertificate', () => {
//   let copyrightCertificate;
//   let deployer;

//   beforeEach(async () => {
//     [deployer] = await ethers.getSigners();

//     const CopyrightCertificate = await ethers.getContractFactory('CopyrightCertificate');
//     copyrightCertificate = await CopyrightCertificate.deploy();
//     await copyrightCertificate.deployed();
//   });

//   describe('Deployment', () => {
//     it('Sets the owner', async () => {
//       expect(await copyrightCertificate.owner()).to.equal(deployer.address);
//     });
//   });

//   describe('Issuing Certificate', () => {
//     let transaction;

//     beforeEach(async () => {
//       transaction = await copyrightCertificate
//         .connect(deployer)
//         .issueCertificate('John Doe', 'My Artwork');
//       await transaction.wait();
//     });

//     it('Returns certificate attributes', async () => {
//       const certificate = await copyrightCertificate.getCertificate(1);
//       expect(certificate.certificateId).to.equal(1);
//       expect(certificate.ownerName).to.equal('John Doe');
//       expect(certificate.workTitle).to.equal('My Artwork');
//       expect(certificate.timestamp).to.be.greaterThan(0);
//     });

//     it('Emits CertificateIssued event', () => {
//       expect(transaction).to.emit(copyrightCertificate, 'CertificateIssued');
//     });
//   });
// });
