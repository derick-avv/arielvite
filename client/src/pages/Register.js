import React from 'react';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';

function Register() {
  // Initial Values for Inputs
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(30).required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(4).max(30).required(),
  });

  const redirect = useNavigate();

  const onSubmit = (data) => {
    axios.post('http://localhost:3001/users/register', data).then(() => {
      console.log(data);
    });
    redirect('/login');
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <h1>REGISTER</h1>
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            autoComplete="off"
            className="inputRegister"
            name="username"
            placeholder="Username"
          />
          <label>Email:</label>
          <ErrorMessage name="email" component="span" />
          <Field
            autoComplete="off"
            className="inputRegister"
            name="email"
            placeholder="Email"
          />
          <label>Password:</label>
          <ErrorMessage name="password" component="span" />
          <Field
            autoComplete="off"
            className="inputRegister"
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
          <div className="registerHere">
            Already Have An Account? <NavLink to="/login">Login Here</NavLink>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
