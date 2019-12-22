import React from 'react';

import './auth-page.styles.scss';
import LoginForm from '../../components/login-form/login-form.component';
import SignupForm from '../../components/signup-form/signup-form.component';

const AuthPage = () => {
  return (
    <div className="auth-page">
      <LoginForm />
      <SignupForm />
    </div>
  );
};

export default AuthPage;
