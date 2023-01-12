import React from 'react';
import Select from './Select.js';

export default function Form({ head }) {
  return (
    <div className="form">
      {/* head select dropdown */}
      <Select label="head" value={head} options={['bird', 'duck', 'dog']} />
      {/* middle select dropdown */}
      {/* bottom select dropdown */}
      {/* catchphrase label */}
      {/* button */}
    </div>
  );
}
