import React, { useState } from 'react';

const ForexExchangeContract = () => {
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [exchangeAmount, setExchangeAmount] = useState('');
  const [isExchanged, setIsExchanged] = useState(false);

  const handleExchange = () => {
    // Simulate contract interaction for currency exchange
    console.log(
      `Exchanging ${exchangeAmount} ${sourceCurrency} to ${targetCurrency}`
    );
  };

  return (
    <div className="p-4 bg-custom-smokewhite">
      <h1 className="text-2xl text-custom-darkgreen font-bold mb-4">
        Forex Exchange Contract
      </h1>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Source Currency
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Target Currency
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Exchange Amount
        </label>
        <input
          type="number"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={exchangeAmount}
          onChange={(e) => setExchangeAmount(e.target.value)}
        />
      </div>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleExchange}
      >
        Exchange Currency
      </button>

      {isExchanged && (
        <p className="text-custom-darkgreen mt-4">Currency Exchanged!</p>
      )}
    </div>
  );
};

export default ForexExchangeContract;
