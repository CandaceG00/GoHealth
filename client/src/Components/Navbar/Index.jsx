import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import {useNavigate} from "react-router-dom"

function NavbarComponent(props) {
const currentTab="Home"
   

 const navigate=useNavigate();

  return (
    <>
      <Navbar className="custom-navbar" variant="dark">
        <Container>
          <Navbar.Brand onClick={() => navigate("/") } className={currentTab === 'Home' ? 'nav-link active' : 'nav-link'}
          >GoHealth</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() =>  navigate("/about")} className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >About</Nav.Link>
            <Nav.Link onClick={() =>  navigate("/recipes")} className={currentTab === 'Recipes' ? 'nav-link active' : 'nav-link'}
          >Recipes</Nav.Link>
            <Nav.Link onClick={() =>  navigate("/account")} className={currentTab === 'Login' ? 'nav-link active' : 'nav-link'}
          >Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;