import React from 'react';

export default function Select({ label, value, options, onChange }) {
  return (
    <div className="form-select">
      <select value={value} onChange={onChange}>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <label>{label}</label>
    </div>
  );
}
