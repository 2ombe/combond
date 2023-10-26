import React, { useState } from 'react';

const SubscriptionManagementContract = () => {
  const [subscriptionType, setSubscriptionType] = useState('');
  const [subscriptionAmount, setSubscriptionAmount] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Simulate contract interaction to subscribe to a new subscription
    console.log(
      `Subscribing to "${subscriptionType}" subscription with amount: ${subscriptionAmount}`
    );
  };

  return (
    <div className="p-4 bg-custom-smokewhite">
      <h1 className="text-2xl text-custom-darkgreen font-bold mb-4">
        Subscription Management Contract
      </h1>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Subscription Type
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={subscriptionType}
          onChange={(e) => setSubscriptionType(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Subscription Amount
        </label>
        <input
          type="number"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={subscriptionAmount}
          onChange={(e) => setSubscriptionAmount(e.target.value)}
        />
      </div>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleSubscribe}
      >
        Subscribe
      </button>

      {isSubscribed && (
        <p className="text-custom-darkgreen mt-4">Subscribed Successfully!</p>
      )}
    </div>
  );
};

export default SubscriptionManagementContract;
