import React from 'react';

import './login-form.component.scss';
import FormInput from '../form-input/form-input.component';
import CrownButton from '../crown-button/crown-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onFormSubmit = async evt => {
    evt.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.error(err);
    }
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
          <div className="buttons">
            <CrownButton type="submit">Log In</CrownButton>
            <CrownButton isGoogle onClick={signInWithGoogle}>
              Login with Google
            </CrownButton>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
