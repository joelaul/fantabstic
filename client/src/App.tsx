// https://chatgpt.com/c/67e24c79-35c0-8007-8729-5a834c5e3e41

import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { apiUrl } from './constants.js';

function App() {
  const [h1, setH1] = useState('fantabstic');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, [])

  const handleChange = (e) => {
    setH1(e.target.value);
    setEmail(e.target.value);
  }
  const handleKeyDown = (e) => { 
    if (e.key === 'Enter') handleSubmit(e);
  }
  const handleSubmit = async () => {
    if (!submitted) setSubmitted((submitted) => !submitted);
    setH1('fantabstic');
    setEmail('');

    try {
      const res = await fetch(`${apiUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed to fetch')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="logos">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>{h1}</h1>
      <h2>a multimodal tab notebook for guitarists and educators</h2>

      <div className="email">
        <h2 className="email__heading">{!submitted ? 'join the mailing list' : 'thank you!'}</h2>
        <div className="email__main">
          <input 
            ref={input}
            name="email"
            value={email}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Email Address">
          </input>
          <button onClick={handleSubmit}>sign up</button>
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App