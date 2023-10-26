import React, { useState, useEffect } from "react";
import axios from "axios";

function FranchiseTermList() {
  const [franchiseTerms, setFranchiseTerms] = useState([]);

  useEffect(() => {
    async function fetchFranchiseTerms() {
      try {
        const res = await axios.get("/api/franchise");
        setFranchiseTerms(res.data);
      } catch (error) {
        console.error("Error retrieving franchise terms:", error);
      }
    }

    fetchFranchiseTerms();
  }, []);

  return (
    <div>
      <h2>Franchise Terms List</h2>
      <ul>
        {franchiseTerms.map((term) => (
          <li key={term._id}>
            {term.title}
            {/* Display other franchise term properties */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FranchiseTermList;
