import React from 'react';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';
//import './page.css';
export const Alertcomponent = ({variant,...props}) => {
    const [show, setShow] = useState(true);
  return (
    <Alert key={variant} variant={variant}  {...props} onClose={() => setShow(false)} dismissible>
        primary alert
        </Alert>
  );
};
Alertcomponent.propTypes = {
    variant: PropTypes.oneOf(['primary','danger', 'secondary', 'success','warning','info','light','dark']),
  };
  
  Alertcomponent.defaultProps = {
    variant: 'primary',
  };
