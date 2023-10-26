import React, { useState } from 'react';

const PaymentEscrowContract = () => {
  const [payer, setPayer] = useState('');
  const [payee, setPayee] = useState('');
  const [amount, setAmount] = useState('');
  const [isPaymentComplete, setIsPaymentComplete] = useState(false);

  const handleDeposit = () => {
    // Simulate contract interaction to deposit the payment in escrow
    console.log(`Depositing ${amount} from ${payer} to escrow for ${payee}`);
  };

  const handleRelease = () => {
    // Simulate contract interaction to release the payment from escrow to payee
    console.log(`Releasing ${amount} from escrow to ${payee}`);
  };

  return (
    <div className="p-4 bg-custom-smokewhite">
      <h1 className="text-2xl text-custom-darkgreen font-bold mb-4">
        Payment Escrow Contract
      </h1>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Payer
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={payer}
          onChange={(e) => setPayer(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Payee
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={payee}
          onChange={(e) => setPayee(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Amount
        </label>
        <input
          type="number"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleDeposit}
      >
        Deposit to Escrow
      </button>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleRelease}
      >
        Release Payment
      </button>

      {isPaymentComplete && (
        <p className="text-custom-darkgreen mt-4">Payment Completed!</p>
      )}
    </div>
  );
};

export default PaymentEscrowContract;
