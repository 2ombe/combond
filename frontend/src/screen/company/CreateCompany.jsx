import React, { useReducer, useState } from 'react';
import axios from 'axios';
import {
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const reducer = (action, state) => {
  switch (action.type) {
    case 'UPLOAD_REQUEST':
      return { ...state, loadingUpload: true, errorUpload: '' };
    case 'UPLOAD_SUCCESS':
      return { ...state, loadingUpload: action.payload, errorUpload: '' };
    case 'UPLOAD_FAIL':
      return { ...state, loadingUpload: false, errorUpload: action.payload };
    default:
      return state;
  }
};

const CompanyRegistration = () => {
  const navigate = useNavigate();

  const [{ loading, errorUpload, loadingUpload }, dispatch] = useReducer(
    reducer,
    { loading: true, error: true }
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('');
  const [tin, setTin] = useState('');
  const [companyLogo, setCompanyLogo] = useState(null);
  const [description, setDescrption] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setSteet] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/companies',
        {
          name,
          email,
          category,
          description,
          companyLogo,
          tin,
          country,
          city,
          streetAddress,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate(`/company/${data._id}`);
      } else {
        console.error('Company registration failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const bodyFormdata = new FormData();
    bodyFormdata.append('file', file);
    try {
      dispatch({ type: 'UPLOAD_REQUEST' });
      const { data } = await axios.post('/api/upload', bodyFormdata, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      dispatch({ type: 'UPLOAD_SUCCESS', payload: data });
      console.log('logo uploaded successfully');
      setCompanyLogo(data.secure_url);
    } catch (error) {
      console.log(error);
      dispatch({ type: 'UPLOAD_FAIL', payload: 'erro uploading' });
    }
  };

  return (
    <div>
      <h2>Register a New Company</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="name">
          <FormLabel>Company Name</FormLabel>
          <FormControl
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup />
        <FormGroup controlId="Decreption">
          <FormLabel>Describe what you do</FormLabel>
          <FormControl
            as="textarea"
            name="description"
            value={description}
            onChange={(e) => setDescrption(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="Email">
          <FormLabel>Enter company email</FormLabel>
          <FormControl
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="tin">
          <FormLabel>Enter company tin</FormLabel>
          <FormControl
            type="text"
            name="tin"
            value={tin}
            onChange={(e) => setTin(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="category">
          <FormLabel>Enter company category</FormLabel>
          <FormControl
            as="select"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              --Choose company category--
            </option>
            <option value="FOOD">Food processing</option>
            <option value="Drink">Bevarages</option>
            <option value="Clothing">Clothing</option>
          </FormControl>
        </FormGroup>

        <Form.Group controlId="country">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="streetAddress">
          <Form.Label>Street Address</Form.Label>
          <Form.Control
            type="text"
            name="streetAddress"
            value={streetAddress}
            onChange={(e) => setSteet(e.target.value)}
          />
        </Form.Group>
        <FormGroup controlId="logo">
          <FormLabel>Add your company logo</FormLabel>
          <FormControl type="file" name="companyLogo" onChange={handleUpload} />
        </FormGroup>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default CompanyRegistration;
