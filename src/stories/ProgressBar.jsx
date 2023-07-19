import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './progressbar.css';

export const ProgressBarComponent = (props) => {
  //const now = 60;
  const { now } = props;
  return (
    //<ProgressBar now={now} label={`${now}%`} />
    <ProgressBar variant now={now} label={`${now}%`} className={'storybook-progressbar'}/>
  );
}

