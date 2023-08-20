import React from 'react';
import CountryFlag from 'react-country-flag';

const Flag = ({ countryCode }: {countryCode?: string}) => {
  return (
    <div >
      <CountryFlag style={{ width: '100%', height: '100%'}} countryCode={countryCode || 'US'} svg />
    </div>
  );
};

export default Flag;
