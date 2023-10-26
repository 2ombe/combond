import React, { useState } from 'react';

const BilateralAgreementContract = () => {
  const [countryA, setCountryA] = useState('');
  const [countryB, setCountryB] = useState('');
  const [agreementDetails, setAgreementDetails] = useState('');
  const [isAgreementUploaded, setIsAgreementUploaded] = useState(false);

  const handleUploadAgreement = () => {
    // Simulate contract interaction to upload the bilateral agreement
    console.log(
      `Uploading bilateral agreement between ${countryA} and ${countryB}: ${agreementDetails}`
    );
  };

  return (
    <div className="p-4 bg-custom-smokewhite">
      <h1 className="text-2xl text-custom-darkgreen font-bold mb-4">
        Bilateral Agreement Contract
      </h1>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Country A
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={countryA}
          onChange={(e) => setCountryA(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Country B
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={countryB}
          onChange={(e) => setCountryB(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Agreement Details
        </label>
        <textarea
          rows="4"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={agreementDetails}
          onChange={(e) => setAgreementDetails(e.target.value)}
        />
      </div>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleUploadAgreement}
      >
        Upload Agreement
      </button>

      {isAgreementUploaded && (
        <p className="text-custom-darkgreen mt-4">Agreement Uploaded!</p>
      )}
    </div>
  );
};

export default BilateralAgreementContract;
