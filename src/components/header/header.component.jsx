import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ authUser }) => {
  const logoutBtn = (
    <div className="option" onClick={() => auth.signOut()}>
      Logout
    </div>
  );
  const loginLink = (
    <Link className="option" to="/auth">
      Login
    </Link>
  );
  const loginOrLogout = authUser ? logoutBtn : loginLink;

  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {loginOrLogout}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  authUser: state.user.authUser
});

export default connect(mapStateToProps)(Header);
