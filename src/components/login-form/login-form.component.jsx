import React, { useState } from 'react';

import './login-form.component.scss';
import FormInput from '../form-input/form-input.component';
import CrownButton from '../crown-button/crown-button.component';
import { signInWithGoogleAction, signInWithEmailAction } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const LoginForm = ({ dispatchGoogleSignIn, dispatchEmailSignIn }) => {
  const [userCreds, setCreds] = useState({ email: '', password: '' });
  const onFormSubmit = async evt => {
    evt.preventDefault();
    dispatchEmailSignIn(userCreds);
  };
  const onFormChange = evt => {
    setCreds({ ...userCreds, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="login-form">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={onFormSubmit}>
        <FormInput
          required
          type="email"
          name="email"
          label="email"
          value={userCreds.email}
          handleChange={onFormChange}
        />
        <FormInput
          required
          type="password"
          name="password"
          label="password"
          value={userCreds.password}
          handleChange={onFormChange}
        />
        <br />
        <div className="buttons">
          <CrownButton type="submit">Log In</CrownButton>
          <CrownButton type="button" isGoogle onClick={dispatchGoogleSignIn}>
            Login with Google
          </CrownButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchGoogleSignIn: () => dispatch(signInWithGoogleAction()),
  dispatchEmailSignIn: emailAndPassword => dispatch(signInWithEmailAction(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(LoginForm);
