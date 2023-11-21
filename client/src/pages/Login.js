import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../helpers/AuthContext';
import { NavLink } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthState } = useContext(AuthContext);
  let redirect = useNavigate();

  const login = () => {
    const data = {
      username: username,
      password: password,
    };

    axios.post('http://localhost:3001/users/login', data).then((response) => {
      if (response.data.error) {
        console.log(response.data.error);
      } else {
        localStorage.setItem('accessToken', response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        redirect('/');
      }
    });
  };

  return (
    <div className="formContainer">
      <h1>Login</h1>
      <label>Username:</label>
      <input
        className="inputLogin"
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="Username"
      />
      <label>Password:</label>
      <input
        className="inputLogin"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="Password"
      />

      <button onClick={login}>Login</button>
      <div className="registerHere">
        Don't Have An Account? <NavLink to="/register">Register Here</NavLink>
      </div>
    </div>
  );
}

export default Login;
