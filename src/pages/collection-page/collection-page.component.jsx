import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection-page.styles.scss';
import { selectShopCollection } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

const CollectionPage = ({ collection }) => {
  return (
    <div className="collection-page">
      <h2 className="title">{collection.title} Page</h2>
      <div className="items">
        {collection.items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
