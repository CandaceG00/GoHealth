import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

function navbarComponent(props) {

  const {
    currentTab,
    handleTabChange,

  } = props;

  return (
    <>
      <Navbar className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home" onClick={() => handleTabChange('Home')} className={currentTab === 'Home' ? 'nav-link active' : 'nav-link'}
          >GoHealth</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about" onClick={() => handleTabChange('About')} className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >About</Nav.Link>
            <Nav.Link href="#recipes" onClick={() => handleTabChange('Recipes')} className={currentTab === 'Recipes' ? 'nav-link active' : 'nav-link'}
          >Recipes</Nav.Link>
            <Nav.Link href="#login" onClick={() => handleTabChange('Login')} className={currentTab === 'Login' ? 'nav-link active' : 'nav-link'}
          >Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>

export default navbarComponent;