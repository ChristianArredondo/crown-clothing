import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelClass = `${otherProps.value.length ? 'shrink' : ''} form-input-label`;
  const labelElement = label ? <label className={labelClass}>{label}</label> : null;

  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {labelElement}
    </div>
  );
};

export default FormInput;
