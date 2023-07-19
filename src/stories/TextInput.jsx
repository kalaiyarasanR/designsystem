import React from "react";
import PropTypes from 'prop-types';
import './textinput.css';
const InputText = ({
  value,
  onChange,
  size,
  label,
  placeholder,
  backgroundColor,
  type,
  ...props
}) => {
  return (
    <>
    <label>{label}</label>
<input
      value={value}
      onChange={onChange}
      className={['storybook-text', `storybook-text--${size}`].join(' ')}
      placeholder={placeholder}
      style={backgroundColor && { backgroundColor }}
      type={type==='text' ? 'text' : 'number'}
      {...props}
    />
    </>
  );
};

InputText.propTypes = {
  //size: PropTypes.oneOf(['medium', 'large']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['text', 'number', 'floating-point']),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

InputText.defaultProps = {
  backgroundColor: null,
  size: 'medium',
  type: 'text',
  label: 'Enter a value',
  name: 'input',
  placeholder: 'Please enter a value',
  onChange: undefined
};

export default InputText;