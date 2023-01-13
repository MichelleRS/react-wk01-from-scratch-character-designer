import './App.css';
import React, { useState } from 'react';

import Form from './components/Form/Form.js';
import Character from './components/Character/Character.js';
import Stats from './components/Stats/Stats.js';

function App() {
  // head
  const [head, setHead] = useState('sphinx');
  const [headCount, setHeadCount] = useState(0);
  // shirt
  const [shirt, setShirt] = useState('pink');
  const [shirtCount, setShirtCount] = useState(0);
  // pants
  const [pants, setPants] = useState('gray');
  const [pantsCount, setPantsCount] = useState(0);
  // catchprhases input
  const [input, setInput] = useState('');
  const [catchphrases, setCatchphrases] = useState([]);

  const handleClick = () => {
    if (!input) return;
    setCatchphrases((prevState) => {
      return [...prevState, input];
    });
    setInput('');
  };

  const handleChange = (type, value) => {
    // head
    if (type === 'head') {
      setHead(value);
      setHeadCount(headCount + 1);
    }
    // shirt
    if (type === 'shirt') {
      setShirt(value);
      setShirtCount(shirtCount + 1);
    }
    // pants
    if (type === 'pants') {
      setPants(value);
      setPantsCount(pantsCount + 1);
    }
  };

  return (
    <main className="App">
      <h1>Character Designer</h1>
      <section className="container">
        <div className="left">
          <Form
            {...{
              head,
              setHead,
              setHeadCount,
              shirt,
              setShirt,
              setShirtCount,
              pants,
              setPants,
              setPantsCount,
              handleChange,
              setInput,
              handleClick,
            }}
          />
          <Stats {...{ headCount, shirtCount, pantsCount, catchphrases }} />
        </div>
        <div className="right">
          <Character {...{ head, shirt, pants }} />
        </div>
      </section>
    </main>
  );
}

export default App;
