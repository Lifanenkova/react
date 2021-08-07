import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { LOGIN_SCHEMA } from './../../../utils/validatingSchemas';
import Input from './../Input/';

function LoginForm () {
  const loginFormInitialValues = {
    email: '',
    password: '',
  };

  const loginFormHandleSubmit = (values, formikBag) => {
    console.log('formikBag', formikBag);
    console.log('values', values);
    formikBag.resertForm();
  };

  return (
    <Formik
      initialVallues={loginFormInitialValues}
      onSubmit={loginFormHandleSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
      {formikProps => {
        console.log('formikProps', formikProps);
        return (
          <Form>
            <Input type='text' name='email' placeholder='test@test.test' />
            <Input type='text' name='password' />

            <button type='submit'>Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
