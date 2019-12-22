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
import { selectAuthUser } from './redux/user/user.selectors';
import { checkUserSessionAction } from './redux/user/user.actions';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatchCheckUserSession();
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
  dispatchCheckUserSession: () => dispatch(checkUserSessionAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
