import React from 'react';
import './Character.css';

export default function Character({ head }) {
  return (
    <div className="character">
      <div
        className="head-image"
        style={{ backgroundImage: `url(./head-${head}.png)`, height: '500px' }}
      ></div>
    </div>
  );
}
