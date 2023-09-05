import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./header-style.css";

function LandingPageComponent() {
  return (
    <Container fluid>
      <Card className="text-center landing-card">
        <Card.Body>
          <Card.Title>Welcome to Octohoodie</Card.Title>
          <Card.Text>
            Your Ultimate Beach Poncho Experience
          </Card.Text>
          <Card.Text>
            Discover our premium collection of stylish and comfortable beach
            ponchos. Whether you're lounging by the ocean or enjoying the
            sunset, Octohoodie has you covered in style.
          </Card.Text>
          <Button variant="primary">Shop Now</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default LandingPageComponent;
