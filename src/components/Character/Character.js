import React from 'react';
import './Character.css';

export default function Character({ head, shirt }) {
  return (
    <div className="character">
      {/* head */}
      <div
        className="head-image"
        style={{ backgroundImage: `url(./head-${head}.png)`, height: '500px' }}
      ></div>
      {/* shirt */}
      <div
        className="shirt-image"
        style={{ backgroundImage: `url(./shirt-${shirt}.png)`, height: '500px' }}
      ></div>
      {/* pants */}
    </div>
  );
}
