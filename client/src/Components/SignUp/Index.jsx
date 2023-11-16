import { Container, Row, Col } from 'react-bootstrap'; // Import Row and Col
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../utils/queries-mutations';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Get form values
    const email = event.target.elements.formGridEmail.value;
    const password = event.target.elements.formGridPassword.value;

    // Simulate successful registration
    // For a real application, you would make an API call to the server here
    // and handle the response accordingly
    console.log('Simulated successful registration for:', email);

    // Redirect to the homepage
    window.location.href = '/';
  };


  return (
    <>
      <Container className="header">
        <h1>
          Sign Up for <span className="title">GoHealth!</span>
        </h1>
      </Container>

      <br />

      <Container className="signup-form">
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
      </Container>

      <br></br>
    </>
  );
}

export default SignUp;