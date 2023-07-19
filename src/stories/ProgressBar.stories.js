import React from 'react';
import { action } from '@storybook/addon-actions';
import {ProgressBarComponent} from './ProgressBar';

export default {
  title: 'ProgressBar',
  component: ProgressBarComponent,
  tags: ['autodocs'],
};

const Template = (args) => <ProgressBarComponent {...args} />;

export const Default = Template.bind({});

Default.args = {
  now: 50
};

