import React from 'react';

import './signup-form.scss';
import FormInput from '../form-input/form-input.component';
import CrownButton from '../crown-button/crown-button.component';
import { connect } from 'react-redux';
import { registerUserAction } from '../../redux/user/user.actions';

class SignupForm extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: ''
  };

  onSubmitForm = async evt => {
    evt.preventDefault();
    const { email, password, passwordConfirm } = this.state;

    if (password !== passwordConfirm) {
      alert("passwords don't match!");
      return;
    }

    this.props.dispatchRegisterUser({ email, password });
  };

  onFormChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { displayName, email, password, passwordConfirm } = this.state;
    return (
      <div className="signup-form">
        <h2>I don't have an account</h2>
        <span>Register to create a new account</span>
        <form onSubmit={this.onSubmitForm}>
          <FormInput
            type="text"
            name="displayName"
            label="display name"
            value={displayName}
            handleChange={this.onFormChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="email"
            value={email}
            handleChange={this.onFormChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            value={password}
            handleChange={this.onFormChange}
            required
          />
          <FormInput
            type="password"
            name="passwordConfirm"
            label="confirm password"
            value={passwordConfirm}
            handleChange={this.onFormChange}
            required
          />
          <div className="buttons">
            <CrownButton type="submit">Register</CrownButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchRegisterUser: emailAndPassword => dispatch(registerUserAction(emailAndPassword))
});

export default connect(null, mapDispatchToProps)(SignupForm);
