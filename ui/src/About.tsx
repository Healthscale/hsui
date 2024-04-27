import React from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import './General.css'
import { HashLink } from 'react-router-hash-link';

function About() {
  return (
    <div className="about-section">
      <Container>
        <Row>
          <Col md={6} className="about-text">
            <h2>Better clinical outcomes and healthcare workflows assisted by AI.</h2>
            <p>Connect with us to leverage AI to assist in diagnosis and clinical decision making, automate and improve your healthtech workflows and driveoperational efficiency.</p>
            <Button className='hs-button-dark about-bt'><HashLink to="#contact" className='clean-link'>Contact</HashLink></Button>
          </Col>
          <Col md={6} className="about-cards">
            {/* add one image from https://hsassets.s3.ap-south-1.amazonaws.com/hs1.png */}
            <Card.Img src="https://hsassets.s3.ap-south-1.amazonaws.com/hs1.png" alt="HealthSense" />
          </Col>
          {/* <Col md={6} className="about-cards">
            <Row>
              <Col>
                <Card className='card'>
                  <Card.Img variant="top" src="https://cdn.hexahealth.com/Image/555f2d78-e4e7-47da-99f9-29c340efc463.webp" alt="Create Abha"  className='card-image'/>
                  <Card.Img variant="top" src="https://play-lh.googleusercontent.com/VptQTSoehlo19_uR0yVMTLykaV3NW3lO1D_FCa-fu4dhbJz3Rbli3afy8YznVJ5M9ko" alt="Create Abha"  className='card-image'/>
                  <Card.Body>
                    <Card.Title>Create Ayushman Bharat Health Account</Card.Title>
                    <Card.Text>
                    Take control of your health journey today by creating your ABHA ID.
                    </Card.Text>
                    <button type="submit" className='btn btn-primary'>Create Abha</button>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className='card'>
                  <Card.Img variant="top" src="https://cdn.clinicallabmanager.com/assets/articleNo/26298/aImg/49044/how-automation-technology-can-help-fill-the-worker-void-in-clinical-labs-l.jpg" className='card-image' />
                  <Card.Img variant="top" src="https://cdn0.iconfinder.com/data/icons/medical-354/64/Lab-results-test-analysis-diagnostic-512.png" className='card-image' />
                  <Card.Body>
                    <Card.Title>Digitalizing medical labs </Card.Title>
                    <Card.Text>
                    Secure patients data and comply with regulations with our all-in-one solution.
                    </Card.Text>
                    <a href="https://calendly.com/siddharth22/30min"><button type="submit" className='btn btn-primary'>Book appointment</button></a>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default About;
