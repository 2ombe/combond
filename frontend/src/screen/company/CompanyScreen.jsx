import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const CompanyDetails = () => {
  const { id } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(() => {
    // Fetch company details by company ID from the backend
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`/api/companies/${id}`);

        if (response.status === 200) {
          setCompany(response.data.company);
        } else {
          console.error("Failed to fetch company details");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchCompanyDetails();
  }, [id]);

  return (
    <Container>
      <Row>
        <Col>
          {company ? (
            <Card>
              <Col>
                <Card.Header className="text-items-center">
                  <h2>{company.name}</h2>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Text>
                        <strong>Description:</strong> {company.description}
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>
                        <strong>TIN:</strong> {company.tin}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text>
                        <strong>Category:</strong> {company.category}
                      </Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>
                        <strong>Country:</strong> {company.country}
                      </Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>

              <Card.Img
                src={company.companyLogo}
                className="img-large"
                alt={company.name}
              />
              <Card.Footer>
                <Row>
                  <Card.Text>
                    <strong>Email:</strong> {company.email}
                  </Card.Text>
                </Row>
                <Row>
                  <Col>
                    <Card.Text>
                      <strong>City:</strong> {company.city || "N/A"}
                    </Card.Text>
                  </Col>
                  <Col>
                    <Card.Text>
                      <strong>Street Address:</strong>{" "}
                      {company.streetAddress || "N/A"}
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          ) : (
            <p>Loading company details...</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanyDetails;
