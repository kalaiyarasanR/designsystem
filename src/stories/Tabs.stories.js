import React from 'react';
import Tab from 'react-bootstrap/Tab';
import { TabsComponent } from './Tabs'

export default {
  title: 'Tabs',
  component: TabsComponent,
  tags: ['autodocs'],
};

//const Template = (args) => <TabsComponent {...args} />;
//export const Default  => <TabsComponent />;

export const tabs = {
    args: {
      variant: 'tabs',
    },
  };
  
  export const pills = {
    args: {
      variant: 'pills',
    },
  };