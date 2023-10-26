import React, { useState } from 'react';

const QualityAssuranceContract = () => {
  const [verificationTask, setVerificationTask] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyTask = () => {
    // Simulate contract interaction to verify the task
    console.log(`Verifying task: ${verificationTask}`);
  };

  const handleManageTask = () => {
    // Simulate contract interaction to manage the task
    console.log(`Managing task: ${verificationTask}`);
  };

  return (
    <div className="p-4 bg-custom-smokewhite">
      <h1 className="text-2xl text-custom-darkgreen font-bold mb-4">
        Quality Assurance Contract
      </h1>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Task to Verify/Manage
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={verificationTask}
          onChange={(e) => setVerificationTask(e.target.value)}
        />
      </div>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2 mr-2"
        onClick={handleVerifyTask}
      >
        Verify Task
      </button>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleManageTask}
      >
        Manage Task
      </button>

      {isVerified && (
        <p className="text-custom-darkgreen mt-4">Task Verified!</p>
      )}
    </div>
  );
};

export default QualityAssuranceContract;
