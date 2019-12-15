import React from 'react';

import './crown-button.scss';

const CrownButton = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button className={`${isGoogle ? 'google' : ''} crown-button`} {...otherProps}>
      {children}
    </button>
  );
};

export default CrownButton;
