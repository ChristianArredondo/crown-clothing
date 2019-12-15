import React from 'react';

import collections from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
  state = {
    collections
  };

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...metaProps }) => {
          return <CollectionPreview key={id} {...metaProps} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
