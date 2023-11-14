import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './FormStyle.css'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/userRegister', { name, email, password })
      .then((result) => {
        console.log(result);
        navigate('/');
        alert("Create an account successfully")
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"

            onChange={(e) => setEmail(e.target.value)}
            required

          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"

            onChange={(e) => setPassword(e.target.value)}
            required

          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an Account?</p>
      <Link to="/">Login</Link>
    </div>
  );
};

export default Signup;
