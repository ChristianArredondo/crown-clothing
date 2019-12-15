import React from 'react';

import './collection-preview.styles.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title = '', items = [] }) => {
  const upToFourItems = items.length > 4 ? items.slice(0, 4) : items;
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {upToFourItems.map(({ id, ...item }) => {
          return <CollectionItem key={id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default CollectionPreview;
