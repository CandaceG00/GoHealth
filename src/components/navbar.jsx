import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/navbar.css';

function navbarComponent() {
  return (
    <>
      <Navbar className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Project 3</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Recipes</Nav.Link>
            <Nav.Link href="#pricing">Login</Nav.Link>
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