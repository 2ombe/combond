import React, { useState } from 'react';

const DealContract = () => {
  const [dealId, setDealId] = useState('');
  const [dealAmount, setDealAmount] = useState('');
  const [isDealAccepted, setIsDealAccepted] = useState(false);

  const handleCreateDeal = () => {
    // Simulate contract interaction to create a deal
    console.log(`Creating deal with ID: ${dealId} and amount: ${dealAmount}`);
  };

  const handleAcceptDeal = () => {
    // Simulate contract interaction to accept the deal
    console.log(`Accepting deal with ID: ${dealId}`);
  };

  return (
    <div className="p-4 bg-custom-smokewhite">
      <h1 className="text-2xl text-custom-darkgreen font-bold mb-4">
        Deal Contract
      </h1>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Deal ID
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={dealId}
          onChange={(e) => setDealId(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Deal Amount
        </label>
        <input
          type="number"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={dealAmount}
          onChange={(e) => setDealAmount(e.target.value)}
        />
      </div>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2 mr-2"
        onClick={handleCreateDeal}
      >
        Create Deal
      </button>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleAcceptDeal}
      >
        Accept Deal
      </button>

      {isDealAccepted && (
        <p className="text-custom-darkgreen mt-4">Deal Accepted!</p>
      )}
    </div>
  );
};

export default DealContract;
