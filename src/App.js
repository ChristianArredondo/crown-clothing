import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import AuthPage from './pages/auth-page/auth-page.component';
import { auth, createUser } from './firebase/firebase.utils';

class App extends React.Component {
  state = { authUser: null };
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUserProfile => {
      if (!authUserProfile) {
        this.setState({ authUser: authUserProfile });
        return;
      }

      const userRef = await createUser(authUserProfile);
      userRef.onSnapshot(snapshot => {
        this.setState({
          authUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
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
        <Header authUser={this.state.authUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/auth" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
