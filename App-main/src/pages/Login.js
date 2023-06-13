import React from 'react';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LoginForm from './../components/login/LoginForm';

function Login() {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
}

export default Login;
