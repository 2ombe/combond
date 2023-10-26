import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Company(props) {
  const { company } = props;

  const connectToMetaMask = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // User is now connected to MetaMask.
        // You can add additional logic or redirect them to a wallet-specific page.
      } else {
        console.error('MetaMask not detected. Please install MetaMask.');
      }
    } catch (error) {
      console.error('MetaMask connection error:', error);
    }
  };

  return (
    <Card>
      <Card.Header>{company.name}</Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <Link to={`/company/${company._id}`}>
              <img
                src={company.companyLogo}
                className="card-img-top"
                alt={company.name}
              />
            </Link>
          </Col>
          <Col>
            <Card.Text>{company.description}</Card.Text>
          </Col>
        </Row>
        <Card.Title>{company.category}</Card.Title>
        <Button onClick={connectToMetaMask}>Connect</Button>
      </Card.Body>
    </Card>
  );
}

export default Company;
