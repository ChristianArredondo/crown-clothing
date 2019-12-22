import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectAuthUser } from '../../redux/user/user.selectors';
import { selectIsCartVisible } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { logoutUserAction } from '../../redux/user/user.actions';

const Header = ({ authUser, isVisible, dispatchLogoutUser }) => {
  const logoutBtn = (
    <div className="option" onClick={dispatchLogoutUser}>
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
      {isVisible ? <CartDropdown /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isVisible: selectIsCartVisible,
  authUser: selectAuthUser
});

const mapDispatchToProps = dispatch => ({
  dispatchLogoutUser: () => dispatch(logoutUserAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
