import React from 'react';

import './login-form.component.scss';
import FormInput from '../form-input/form-input.component';
import CrownButton from '../crown-button/crown-button.component';
import { signInWithGoogleAction, signInWithEmailAction } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class LoginForm extends React.Component {
  state = {
    email: '',
    password: ''
  };

  onFormSubmit = async evt => {
    evt.preventDefault();
    this.props.dispatchEmailSignIn(this.state);
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
            <CrownButton type="button" isGoogle onClick={this.props.dispatchGoogleSignIn}>
              Login with Google
            </CrownButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGoogleSignIn: () => dispatch(signInWithGoogleAction()),
  dispatchEmailSignIn: emailAndPassword => dispatch(signInWithEmailAction(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(LoginForm);
