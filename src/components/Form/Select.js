import React from 'react';

export default function Select({ label, value, options }) {
  return (
    <div className="form-select">
      <select value={value}>
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
