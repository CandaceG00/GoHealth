import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'; // Import Row and Col
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/login.css';

function login() {
  return (
    <>
      <Container className="header">
        <h1>
          Login to <span className="title">GoHealth!</span>
        </h1>
      </Container>

      <br />

      <Container className="login-form">
        <Row>
          <Col sm={6}> {/* Adjust the width as needed (e.g., sm={6} for half the width) */}
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button className="login" variant="primary" type="submit">
                Login
              </Button>
              <Button className="signup ml-2" variant="primary" type="submit">
                Sign up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <br></br>
    </>
  );
}

export default login;
