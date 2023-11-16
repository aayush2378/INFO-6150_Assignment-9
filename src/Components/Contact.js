// ContactPage.js
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const ContactPage = () => {
  const emailAddress = 'contact@jobalike.com';
  const phoneNumber = '+1 (555) 123-4567';

  return (
    <Card className="w-50 mt-5 mx-auto">
      <Card.Body>
        <Card.Title>Contact Us</Card.Title>

        <ListGroup>
          <ListGroup.Item>
            <strong>Email:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone:</strong> {phoneNumber}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default ContactPage;
