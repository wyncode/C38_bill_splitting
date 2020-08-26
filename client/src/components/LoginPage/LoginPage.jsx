import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';
// import swal from 'sweetalert';

const LoginPage = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/login', formData).then((response) => {
      sessionStorage.setItem('user', response.data);
      setCurrentUser(response.data);
      history.push('/');
    });

    // .catch(() => swal('Oops!', 'something went wrong', 'warning'));
  };

  return (
    <Container className="container d-flex flex-column align-items-center justify-content-center fullscreen">
      <h1 className="mb-4 text-center">Welcome to Cuenta</h1>
      <Form style={{ width: 300 }} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="email">Email Address</Form.Label>
          <Form.Control
            id="email"
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-center">
          <Button id="button" variant="dark" type="submit">
            Login
          </Button>
        </Form.Group>
      </Form>
      <Link className="mt-1" to="/signup">
        Need an Account? Sign Up.
      </Link>
      <Link className="mt-1" to="/">
        Forgot your password? Click here.
      </Link>
    </Container>
  );
};

export default LoginPage;
