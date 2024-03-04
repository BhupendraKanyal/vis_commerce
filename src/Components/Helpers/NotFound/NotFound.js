import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const NotFoundPage = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col>
          <h1>404 - Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist. It may be in-progress</p>
        </Col>
      </Row>
    </Container>
  );
};