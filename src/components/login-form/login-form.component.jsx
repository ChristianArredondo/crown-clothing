import React from 'react';

import './login-form.component.scss';
import FormInput from '../form-input/form-input.component';
import CrownButton from '../crown-button/crown-button';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onFormSubmit = evt => {
    evt.preventDefault();
  };

  onFormChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    return (
      <div className="login-form">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.onFormSubmit}>
          <FormInput
            required
            type="email"
            name="email"
            label="email"
            value={this.state.email}
            handleChange={this.onFormChange}
          />
          <FormInput
            required
            type="password"
            name="password"
            label="password"
            value={this.state.password}
            handleChange={this.onFormChange}
          />
          <br />
          <CrownButton type="submit">Log In</CrownButton>
        </form>
      </div>
    );
  }
}

export default LoginForm;
