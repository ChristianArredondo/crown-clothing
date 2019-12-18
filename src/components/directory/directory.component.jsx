import React from 'react';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectoryMenuItems } from '../../redux/directory/directory.selectors';

const Directory = ({ menuItems }) => {
  return (
    <div className="directory-menu">
      {menuItems.map(({ id, ...metaProps }) => {
        return <MenuItem key={id} {...metaProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menuItems: selectDirectoryMenuItems
});

export default connect(mapStateToProps)(Directory);
