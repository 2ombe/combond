// const { expect } = require('chai');
// const { ethers } = require('hardhat');

// describe('CertificateRegistry', () => {
//   let certificateRegistry;
//   let deployer, authority, recipient;

//   beforeEach(async () => {
//     [deployer, authority, recipient] = await ethers.getSigners();

//     const CertificateRegistry = await ethers.getContractFactory('CertificateRegistry');
//     certificateRegistry = await CertificateRegistry.deploy();
//     await certificateRegistry.deployed();
//   });

//   it('should add and verify authorized authorities', async () => {
//     await certificateRegistry.addAuthorizedAuthority(authority.address);

//     expect(await certificateRegistry.authorizedAuthorities(authority.address)).to.equal(true);
//     expect(await certificateRegistry.authorizedAuthorities(deployer.address)).to.equal(false);
//   });

//   it('should issue a certificate by an authorized authority', async () => {
//     const certificateName = 'Certificate of Excellence';

//     await certificateRegistry.addAuthorizedAuthority(authority.address);
//     await certificateRegistry.connect(authority).issueCertificate(recipient.address, certificateName);

//     const certificate = await certificateRegistry.certificates(recipient.address);
//     expect(certificate.name).to.equal(certificateName);
//     // You can add more checks for other fields and timestamps if needed
//   });

//   it('should not allow unauthorized issuance of certificates', async () => {
//     const certificateName = 'Unauthorized Certificate';

//     await expect(
//       certificateRegistry.connect(deployer).issueCertificate(recipient.address, certificateName)
//     ).to.be.revertedWith('Not authorized');
//   });
// });
