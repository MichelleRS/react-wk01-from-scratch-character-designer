import React from 'react';
import './Stats.css';

export default function Stats({ headCount, shirtCount, pantsCount, catchphrases }) {
  return (
    <div className="stats">
      <p>
        You have changed the head {headCount} times, shirt {shirtCount} times, and pants{' '}
        {pantsCount} times.
      </p>
      <p>Your character catphrases:</p>
      <ul className="catchphrases">
        {catchphrases.map((catchphrase) => (
          <li className="catchphrase" key={catchphrase}>
            {catchphrase}
          </li>
        ))}
      </ul>
    </div>
  );
}
