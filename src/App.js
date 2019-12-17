import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import AuthPage from './pages/auth-page/auth-page.component';
import CheckoutPage from './pages/checkout-page/checkout-page.component';
import { auth, createUser } from './firebase/firebase.utils';
import { setCurrentUserAction } from './redux/user/user.actions';
import { selectAuthUser } from './redux/user/user.selectors';

class App extends React.Component {
  state = { authUser: null };
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { dispatchSetCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUserProfile => {
      if (!authUserProfile) {
        dispatchSetCurrentUser(null);
        return;
      }

      const userRef = await createUser(authUserProfile);
      userRef.onSnapshot(snapshot => {
        dispatchSetCurrentUser({
          id: snapshot.id,
          ...snapshot.data()
        });
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/auth"
            render={() => {
              return this.props.authUser ? <Redirect to="/" /> : <AuthPage />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authUser: selectAuthUser
});

const mapDispatchToProps = dispatch => ({
  dispatchSetCurrentUser: user => dispatch(setCurrentUserAction(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
