import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollections } from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection-page/collection-page.container';

class ShopPage extends React.Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route exact path={match.path} component={CollectionsOverviewContainer} />
        <Route exact path={match.path + '/:collectionId'} component={CollectionPageContainer} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections())
});

export default connect(null, mapDispatchToProps)(ShopPage);
