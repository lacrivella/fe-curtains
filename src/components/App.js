import React from 'react';
// import Firebase from './firebase/Firebase';
import User from './login/User';
import TemperatureInput from './input/TemperatureInput';

export default function App() {
  return (
    <div>
      <User user="name" avatar="nope"/>
      <TemperatureInput zipcode="97215" temperature="20" handleClick={() => {}}/>
    </div>
  );
}