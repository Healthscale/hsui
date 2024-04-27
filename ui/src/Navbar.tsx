import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
import './General.css'
import { Link } from "react-router-dom";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  }

  var loggedIn = localStorage.getItem('username') == null ? false : true;

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    window.location.href = "/"
  }

  let navButtons;

  if (loggedIn) {
    navButtons = (
      <div>
        <Button className='hs-button-dark' onClick={handleLogout}>Logout</Button>
      </div>
    )
  } else {
    navButtons = (
      <div>
        <Button className='hs-button-dark'><Link className='clean-link' to="/login">Login</Link></Button>
        <Button className='hs-button-border'><Link className='clean-link' to="https://forms.gle/QKJTE7g9cUxvArgMA">Signup</Link></Button>
      </div>
    )
  }

  return (
    <Navbar expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand>
          <Link className='clean-link' to="/">
            {/* https://hsassets.s3.ap-south-1.amazonaws.com/logo.png */}
            {/* <img src="logo.png" alt="Aayurv" className="navbar-logo" /> */}
            <p className='custom' >Healthscale</p>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNav} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {navButtons}
            {/* <Nav.Link><HashLink to="#contact">Contact</HashLink></Nav.Link> */}
            {/* <Nav.Link><HashLink to="#about">About</HashLink></Nav.Link> */}
            {/* <Button className='hs-button-dark'><Link className='clean-link' to="/login">Login</Link></Button>
            <Button className='hs-button-border'><Link className='clean-link' to="https://forms.gle/QKJTE7g9cUxvArgMA">Signup</Link></Button> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
