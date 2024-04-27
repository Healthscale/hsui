import React from "react";
import { Card, Container } from "react-bootstrap";


const Mid: React.FC = () => {
  return (
    <div className="features-section my-5" style={{ padding: "0 50px" }}>
      <Container>
        <div className="row row-cols-md-2 g-4">
          <div className="col hs-card">
            <Card>
            <Card.Body>
              <Card.Title>Generate accurate DDX and Clinical Plans with AI</Card.Title>
            </Card.Body>
            </Card>
          </div>
          <div className="col hs-card">
          <Card>
            <Card.Body>
              <Card.Title>Self learning AI to manage healthcare workflows</Card.Title>
            </Card.Body>
            </Card>
          </div>
          <div className="col hs-card">
          <Card>
            <Card.Body>
              <Card.Title>Secure and seamless digital record management</Card.Title>
            </Card.Body>
            </Card>
          </div>
          <div className="col hs-card">
          <Card>
            <Card.Body>
              <Card.Title>Better patient experience</Card.Title>
            </Card.Body>
            </Card>
          </div>
        </div>
      </Container> 
    </div>
  );
};

export default Mid;
