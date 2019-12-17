import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';
import CrownButton from '../crown-button/crown-button.component';
import { addCartItemAction } from '../../redux/cart/cart.actions';

const CollectionItem = ({ dispatchAddItem, item }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${item.imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CrownButton inverted onClick={() => dispatchAddItem(item)}>
        Add to cart
      </CrownButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatchAddItem: item => dispatch(addCartItemAction(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
