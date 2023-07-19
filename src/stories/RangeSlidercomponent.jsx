import React from 'react';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "rc-slider/assets/index.css";
import Slider from "rc-slider";
import './rangeslider.css';
  const RangeSlidercomponent = () => {
    const [value, setvalue] = useState(20);
    const onSliderChange = () =>{
      setvalue( value );
    }
  return (
    <Form>
     <Slider 
   trackStyle={{ backgroundColor: '#6A2BF3' }}
   defaultValue={value}
   min={0}
   max={100}
   value={value} onChange={setvalue} className={['storybook-rangeslider']}/>
    <Form.Control value={value} className={['studio-slidervalue']} onChange={onSliderChange} style={{marginTop:'20px'}}/>
    </Form>
  );
}

// RangeSlidercomponent.propTypes = {
//   value: PropTypes.number.isRequired,
//   onChange: PropTypes.func,
// };

RangeSlidercomponent.defaultProps = {
  value: 20,
  onChange: undefined
};
export default RangeSlidercomponent;

