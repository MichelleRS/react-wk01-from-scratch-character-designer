import React from 'react';
import Select from './Select.js';

export default function Form({ head, shirt, pants, input, handleChange }) {
  return (
    <div className="form">
      {/* head select dropdown */}
      <Select
        label="head"
        value={head}
        options={['sphinx', 'tuxedo', 'orange']}
        onChange={(e) => handleChange('head', e.target.value)}
      />
      {/* shirt select dropdown */}
      <Select
        label="shirt"
        value={shirt}
        options={['pink', 'orange', 'blue']}
        onChange={(e) => handleChange('shirt', e.target.value)}
      />
      {/* pants select dropdown */}
      <Select
        label="pants"
        value={pants}
        options={['gray', 'black', 'patch']}
        onChange={(e) => handleChange('pants', e.target.value)}
      />
      <div className="form-control">
        {/* catchphrase */}
        <label>Add a catphrase</label>
        <input type="text" value={input} />
        {/* button */}
        <button>Add Catphrase</button>
      </div>
    </div>
  );
}
