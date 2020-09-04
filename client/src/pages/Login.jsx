import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import Navigation from '../components/Navigation';
import swal from 'sweetalert';

const Login = ({ history }) => {
  const [formData, setFormData] = useState(null);
  const { setCurrentUser } = useContext(AppContext);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/api/users/login', formData)
      .then((response) => {
        sessionStorage.setItem('user', response.data);
        setCurrentUser(response.data);
        history.push('/home');
      })
      .catch(() => swal('Oops!', 'something went wrong', 'warning'));
  };

  return (
    <>
      <Navigation />
      <Container className="logincontainer d-flex flex-column align-items-center justify-content-center fullscreen">
        <h2 className="title text-left">Welcome back!</h2>
        <p className="ml-2 mr-4 mb-4 mt-1">
          Make sure to checkout your daily rewards and discounts in your
          dashboard
        </p>
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
            <Link to="/needtofixthis">Forgot password?</Link>
          </Form.Group>
          <Form.Group className="d-flex justify-content-center">
            <Button id="button" variant="dark" type="submit" block>
              Login
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default Login;
