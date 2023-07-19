import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
//import './page.css';

export const TabsComponent = ({title, variant, ...props}) => {
    const [key, setKey] = useState('home');
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
      variant="tabs"
      {...props}
    >
      <Tab eventKey="home" title="home">
        Tab content for Home
      </Tab>
      <Tab eventKey="profile" title="profile">
        Tab content for Profile
      </Tab>
      <Tab eventKey="contact" title="contact">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
};
TabsComponent.propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    variant: PropTypes.oneOf(['tabs', 'pills']),
  };
  
  TabsComponent.defaultProps = {

        title: PropTypes.string.isRequired,

  };