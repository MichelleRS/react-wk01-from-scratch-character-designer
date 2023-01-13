import React from 'react';
import './Form.css';
import Select from './Select.js';

export default function Form({ head, shirt, pants, input, setInput, handleChange, handleClick }) {
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
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        {/* button */}
        <button onClick={handleClick}>Add Catphrase</button>
      </div>
    </div>
  );
}
