import React from 'react';
import PropTypes from 'prop-types';

function TemperatureInput({ zipcode, temperature, handleClick }) {
  return (
    <>
      <input type="text" value={zipcode} plcaeholder="enter zip code"/>
      <input type="text" value={temperature} plcaeholder="set temp"/>
      <button onClick={handleClick}>Submit</button>

    </>
  );
}

TemperatureInput.propTypes = {
  zipcode: PropTypes.string,
  temperature: PropTypes.string,
  handleClick: PropTypes.func
};

export default TemperatureInput;
