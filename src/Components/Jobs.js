import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const Jobs = () => {
  const variants = [
    'Primary',
    'Secondary',
    'Success',
    'Danger',
    'Warning',
    'Info',
    'Light',
    'Dark',
  ];

  return (
    <Row className="justify-content-md-center mt-4">
      {variants.map((variant, index) => (
        <Col md={4} key={index} className="mb-3">
          <Card
            bg={variant.toLowerCase()}
            text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Header>Jobalite</Card.Header>
            <Card.Body>
              <Card.Title>Job Title</Card.Title>
              <Card.Text>
                This is a sample job description. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Jobs;
