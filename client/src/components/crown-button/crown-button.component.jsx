import React from 'react';

import './crown-button.styles.scss';

const CrownButton = ({ children, isGoogle, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${isGoogle ? 'google' : ''} crown-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CrownButton;
