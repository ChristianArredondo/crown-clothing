import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollections } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection-page/collection-page.container';

const ShopPage = ({ dispatchFetchCollection, match }) => {
  useEffect(() => {
    dispatchFetchCollection();
  }, [dispatchFetchCollection]);

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route exact path={match.path + '/:collectionId'} component={CollectionPageContainer} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchFetchCollection: () => dispatch(fetchCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);
