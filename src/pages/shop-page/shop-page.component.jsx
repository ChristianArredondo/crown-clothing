import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection-page/collection-page.component';
import { firestore } from '../../firebase/firebase.utils';
import { setShopCollectionsAction } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubFromShop = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    this.unsubFromShop = collectionRef.onSnapshot(snapshot => {
      const collectionsArr = snapshot.docs.map(doc => {
        const { title, items } = doc.data();
        return {
          routeName: encodeURI(title.toLowerCase()),
          id: doc.id,
          title,
          items
        };
      });

      const collectionsDictionary = collectionsArr.reduce((memo, coll) => {
        memo[coll.title.toLowerCase()] = coll;
        return memo;
      }, {});

      this.props.dispatchSetCollections(collectionsDictionary);
      this.setState({ loading: false });
    });
  }

  componentWillUnmount() {
    this.unsubFromShop && this.unsubFromShop();
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={props => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          exact
          path={match.path + '/:collectionId'}
          isLoading={loading}
          render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchSetCollections: collections => dispatch(setShopCollectionsAction(collections))
});

export default connect(null, mapDispatchToProps)(ShopPage);
