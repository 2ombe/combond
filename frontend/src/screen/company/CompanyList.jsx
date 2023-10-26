import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../../component/LoadingBox';
import MessageBox from '../../component/MessageBox';
import Company from '../../component/Company';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, companies: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function CompanyList() {
  const [{ loading, error, companies }, dispatch] = useReducer(reducer, {
    loading: true,
    companies: [],
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get('/api/companies');
        console.log(data);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_FAIL', payload: error.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <Helmet>
        <title>Companies</title>
      </Helmet> */}
      <div className="companies">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <Row>
            {companies.map((company) => (
              <Col key={company._id} sm={6} md={4} lg={3} className="mb-3">
                <Company company={company} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}
export default CompanyList;
