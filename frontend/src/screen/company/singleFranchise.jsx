// client/src/components/FranchiseTermDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FranchiseTermDetails() {
  const { id } = useParams();
  const [franchiseTerm, setFranchiseTerm] = useState(null);

  useEffect(() => {
    async function fetchFranchiseTerm() {
      try {
        const res = await axios.get(`/api/franchise/${id}`);
        setFranchiseTerm(res.data);
      } catch (error) {
        console.error("Error retrieving franchise term:", error);
      }
    }

    fetchFranchiseTerm();
  }, [id]);

  return (
    <div>
      <h2>Franchise Term Details</h2>
      {franchiseTerm ? (
        <div>
          <p>Title: {franchiseTerm.title}</p>
          <p>Description: {franchiseTerm.description}</p>
          {/* Display other franchise term properties */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FranchiseTermDetails;
