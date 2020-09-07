import React from 'react';
import PropTypes from 'prop-types';
import useSound from 'use-sound';

import Signal from  './Signal';

import bip from './../sounds/bip.mp3';

let tonepos = 0;

const SignalGroup  = ({position}) => {

  const [play] = useSound(bip,{volume:0.5});
  if(tonepos !== position && position !== 0 ) {
    console.log(tonepos, position);
    tonepos = position;
    play();
  }
  
  return (
  <div className="signal-group">
    {[...Array(position)].map((e, i) => <Signal key={i} status="on" />)}
    {[...Array(5 - position)].map((e, i) => <Signal key={i} status="off" />)}
  </div>
  );
}

SignalGroup.propTypes = {
  status: PropTypes.number,
};

export default SignalGroup;