import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function FranchiseTermList() {
  const navigate = useNavigate();
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

  const renderFranchiseTerms = () => {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Fee</th>
            <th>Company</th>
            <th>Franchisee</th>
            <th>start deal</th>
          </tr>
        </thead>
        <tbody>
          {franchiseTerms.map((term) => (
            <tr key={term._id}>
              <td>{term.title}</td>
              <td>{term.description}</td>
              <td>{term.duration}</td>
              <td>{term.fee}</td>
              <td>{term.company}</td>
              <td>{term.franchisee}</td>
              <td>{term.isAccepted}</td>
              <td>
                <Button onClick={() => navigate("/payment")}>Connect</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  return (
    <div>
      <h2>Franchise Terms List</h2>
      {franchiseTerms.length > 0 ? (
        renderFranchiseTerms()
      ) : (
        <p>No franchise terms found.</p>
      )}
    </div>
  );
}

export default FranchiseTermList;
