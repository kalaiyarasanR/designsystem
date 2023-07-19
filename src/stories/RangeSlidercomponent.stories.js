import React from 'react';
import { Form } from 'react-bootstrap';
import { action } from '@storybook/addon-actions';
import RangeSlidercomponent from "./RangeSlidercomponent";

export default {
  title:"RangeSlider",
  component: RangeSlidercomponent,
  tags: ['autodocs'],

};


export const Default = () => <RangeSlidercomponent onChange={action('onChange')}/>;

export const MinMax = {
  args: {
    min: '0',
    max:'100',
  },
};

