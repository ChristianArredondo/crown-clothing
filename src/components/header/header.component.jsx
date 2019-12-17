import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ authUser, cart }) => {
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
        <CartIcon itemCount={0} />
      </div>
      {cart.isVisible ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = ({ user, cart }) => ({
  cart,
  authUser: user.authUser
});

export default connect(mapStateToProps)(Header);
