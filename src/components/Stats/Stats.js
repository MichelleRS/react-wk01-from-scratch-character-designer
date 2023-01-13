import React from 'react';

export default function Stats({ headCount, shirtCount, pantsCount, catchphrases }) {
  return (
    <div>
      <p>
        You have changed the head {headCount} times, shirt {shirtCount} times, and pants{' '}
        {pantsCount} times.
      </p>
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
