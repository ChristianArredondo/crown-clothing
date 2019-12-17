import React from 'react';

import './crown-button.styles.scss';

const CrownButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button className={`${isGoogle ? 'google' : ''} crown-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CrownButton;
