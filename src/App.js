import './App.css';
import React, { useState } from 'react';

import Form from './components/Form/Form.js';
import Character from './components/Character/Character.js';
// import Stats from './components/Stats';

function App() {
  // head
  const [head, setHead] = useState('sphinx');
  // const [headCount, setHeadCount] = useState(0);
  // shirt
  const [shirt, setShirt] = useState('pink');
  // pants

  const handleChange = (type, value) => {
    // head
    if (type === 'head') {
      setHead(value);
      // setHeadCount(headCount + 1);
    }
    // shirt
    if (type === 'shirt') {
      setShirt(value);
    }
  };

  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section className="container">
        <div className="left">
          <Form {...{ head, shirt, handleChange }} />
          {/* <Stats /> */}
        </div>
        <div className="right">
          <Character {...{ head, shirt }} />
        </div>
      </section>
    </main>
  );
}

export default App;
