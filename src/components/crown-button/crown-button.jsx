import React from 'react';

import './crown-button.scss';

const CrownButton = ({ children, ...otherProps }) => {
  return (
    <button className="crown-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CrownButton;
