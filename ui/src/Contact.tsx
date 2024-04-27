import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';
import { Mailbox, Phone } from 'react-bootstrap-icons';

function Contact() {
  return (
    <div className="contact-section" id="contact">
      <Container>
        <Row>
          <Col md={6}>
            <h2>Contact Us</h2>
            <p>If you have any questions or would like to learn more about our healthcare startup in India, please fill out the form below and we will get back to you as soon as possible.</p>
            <p>Alternatively, you can contact us at:</p>
            <ul className="contact-info">
              <li><Phone className='contact-icon'/> +91 9772338453</li>
              <li><Mailbox className='contact-icon'/> siddharth@healthscale.in abhishek.jain@healthscale.in</li>
          </ul>
          </Col>
        </Row>
      </Container>
    </div >
  );
}

export default Contact;
