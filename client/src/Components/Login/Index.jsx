import { Container, Row, Col } from 'react-bootstrap'; // Import Row and Col
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import { LOGIN_USER } from '../../utils/queries-mutations';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

function login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Imports login mutation and provides it here
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    variables: { email, password },
    // Update the cache or handle any side effects after a successful login
    update: (cache, { data }) => {
      // Updates cache or handles side effects
    },
    onError: (error) => {
      console.error('Login error:', error);
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    // Call the login mutation
    try {
      const { data } = await loginUser();

      // Handle the response data if needed
      console.log('Login data:', data);
    } catch (error) {
      console.error('Error in login mutation:', error);
    }
  };

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
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email" 
                  placeholder="Enter email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password" 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button className="login" variant="primary" type="submit">
                Login
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
