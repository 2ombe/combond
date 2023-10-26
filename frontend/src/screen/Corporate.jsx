import React, { useState } from 'react';

const CorporateRegistrationContract = () => {
  const [corporateName, setCorporateName] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegisterCorporate = () => {
    // Simulate contract interaction to register a corporate entity
    console.log(
      `Registering corporate entity with name: ${corporateName} and registration number: ${registrationNumber}`
    );
  };

  return (
    <div className="p-4 bg-custom-smokewhite">
      <h1 className="text-2xl text-custom-darkgreen font-bold mb-4">
        Corporate Registration Contract
      </h1>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Corporate Name
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={corporateName}
          onChange={(e) => setCorporateName(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Registration Number
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={registrationNumber}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
      </div>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleRegisterCorporate}
      >
        Register Corporate
      </button>

      {isRegistered && (
        <p className="text-custom-darkgreen mt-4">Corporate Registered!</p>
      )}
    </div>
  );
};

export default CorporateRegistrationContract;
