import React, { useState } from 'react';

const LogisticCompanyContract = () => {
  const [logisticCompany, setLogisticCompany] = useState('');
  const [task, setTask] = useState('');
  const [isTaskCompleted, setIsTaskCompleted] = useState(false);

  const handleAssignTask = () => {
    // Simulate contract interaction to assign the task to a logistic company
    console.log(
      `Assigning task "${task}" to logistic company "${logisticCompany}"`
    );
  };

  const handleCompleteTask = () => {
    // Simulate contract interaction to mark the task as completed by the logistic company
    console.log(
      `Marking task "${task}" as completed by logistic company "${logisticCompany}"`
    );
  };

  return (
    <div className="p-4 bg-custom-smokewhite">
      <h1 className="text-2xl text-custom-darkgreen font-bold mb-4">
        Logistic Company Contract
      </h1>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Logistic Company Name
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={logisticCompany}
          onChange={(e) => setLogisticCompany(e.target.value)}
        />
      </div>

      <div className="mb-2">
        <label className="block text-custom-darkgreen font-semibold mb-1">
          Task to Assign/Complete
        </label>
        <input
          type="text"
          className="w-full p-2 rounded border border-custom-darkgreen focus:outline-none focus:border-custom-darkgreen"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2 mr-2"
        onClick={handleAssignTask}
      >
        Assign Task
      </button>

      <button
        className="bg-custom-darkgreen text-white px-4 py-2 rounded mt-2"
        onClick={handleCompleteTask}
      >
        Complete Task
      </button>

      {isTaskCompleted && (
        <p className="text-custom-darkgreen mt-4">Task Completed!</p>
      )}
    </div>
  );
};

export default LogisticCompanyContract;
