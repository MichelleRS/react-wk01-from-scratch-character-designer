import React from 'react';
import Select from './Select.js';

export default function Form({ head, shirt, pants, input }) {
  return (
    <div className="form">
      {/* head select dropdown */}
      <Select label="head" value={head} options={['bird', 'duck', 'dog']} />
      {/* shirt select dropdown */}
      <Select label="shirt" value={shirt} options={['pink', 'orange', 'blue']} />
      {/* pants select dropdown */}
      <Select label="pants" value={pants} options={['gray', 'black', 'patch']} />
      <div className="form-control">
        {/* catchphrase */}
        <input type="text" value={input} />
        <label>Add a catphrase</label>
        {/* button */}
        <button>Create Cat</button>
      </div>
    </div>
  );
}
