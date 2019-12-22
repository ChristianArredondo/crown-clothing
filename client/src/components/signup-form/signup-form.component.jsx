import React, { useState } from 'react';

import './signup-form.scss';
import FormInput from '../form-input/form-input.component';
import CrownButton from '../crown-button/crown-button.component';
import { connect } from 'react-redux';
import { registerUserAction } from '../../redux/user/user.actions';

const SignupForm = ({ dispatchRegisterUser }) => {
  const [signupForm, setForm] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });
  const { email, password, passwordConfirm, displayName } = signupForm;
  const onSubmitForm = async evt => {
    evt.preventDefault();
    if (password !== passwordConfirm) {
      alert("passwords don't match!");
      return;
    }
    dispatchRegisterUser({ email, password });
  };
  const onFormChange = evt => {
    setForm({ ...signupForm, [evt.target.name]: evt.target.value });
  };

  return (
    <div className="signup-form">
      <h2>I don't have an account</h2>
      <span>Register to create a new account</span>
      <form onSubmit={onSubmitForm}>
        <FormInput
          type="text"
          name="displayName"
          label="display name"
          value={displayName}
          handleChange={onFormChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          label="email"
          value={email}
          handleChange={onFormChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={onFormChange}
          required
        />
        <FormInput
          type="password"
          name="passwordConfirm"
          label="confirm password"
          value={passwordConfirm}
          handleChange={onFormChange}
          required
        />
        <div className="buttons">
          <CrownButton type="submit">Register</CrownButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchRegisterUser: emailAndPassword => dispatch(registerUserAction(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignupForm);
