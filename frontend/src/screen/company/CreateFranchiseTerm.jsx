import React, { useContext, useState } from "react";
import axios from "axios";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { Store } from "../../Store";

function CreateFranchiseTerm() {
  const { state } = useContext(Store);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: 0,
    fee: 0,
    company: "",
    franchisee: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/franchise", formData, {
        headers: { Authorization: `Bearer ${state.userInfo.token}` },
      });
      console.log("franchise term created:", res.data);
    } catch (error) {
      console.error("Error creating franchise term:", error);
    }
  };
  return (
    <Container>
      <h2 style={{ fontWeight: "bold", fontStyle: "italic", color: "blue" }}>
        Create Franchise Term
      </h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup controlId="description">
          <FormLabel>Description</FormLabel>
          <FormControl
            type="textarea"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup controlId="duration">
          <FormLabel>Duration </FormLabel>
          <FormControl
            type="number"
            placeholder="Enter duration"
            name="duration"
            value={formData.duration}
            onChange={(e) =>
              setFormData({ ...formData, duration: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup controlId="fee">
          <FormLabel>Fee (wei)</FormLabel>
          <FormControl
            type="number"
            placeholder="Enter fee"
            name="fee"
            value={formData.fee}
            onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
          />
        </FormGroup>
        <FormGroup controlId="company">
          <FormLabel>Company Address</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter company address"
            name="company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup controlId="franchisee">
          <FormLabel>Franchisee Address</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter franchisee address"
            name="franchisee"
            value={formData.franchisee}
            onChange={(e) =>
              setFormData({ ...formData, franchisee: e.target.value })
            }
          />
        </FormGroup>
        <Button variant="primary" className="mt-3" type="submit">
          Create
        </Button>
      </Form>
    </Container>
  );
}

export default CreateFranchiseTerm;
