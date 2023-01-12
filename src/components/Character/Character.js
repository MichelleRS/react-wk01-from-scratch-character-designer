import React from 'react';
import './Character.css';

export default function Character({ head, shirt, pants }) {
  return (
    <div className="character">
      {/* head */}
      <div className="head-image" style={{ backgroundImage: `url(./head-${head}.png)` }}></div>
      {/* shirt */}
      <div className="shirt-image" style={{ backgroundImage: `url(./shirt-${shirt}.png)` }}></div>
      {/* pants */}
      <div className="pants-image" style={{ backgroundImage: `url(./pants-${pants}.png)` }}></div>
    </div>
  );
}
