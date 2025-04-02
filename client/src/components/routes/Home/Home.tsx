import { useState, useRef, useEffect } from 'react'
import { apiUrl } from '../../../constants'

import reactLogo from '../../../assets/react.svg'
import viteLogo from '/vite.svg'

const Home = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  }, [])

  const handleChange = (e) => {
    setEmail(e.target.value);
  }
  const handleKeyDown = (e) => { 
    if (e.key === 'Enter') handleSubmit()
  }
  const handleSubmit = async () => {
    if (!submitted) setSubmitted((submitted) => !submitted);
    setEmail('');

    try {
      const res = await fetch(`${apiUrl}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Failed to fetch');
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

      <h1>fantabstic</h1>
      <h2>a multimodal tab notebook for guitarists and educators</h2>
      <a href="/demo"><h3>try the demo</h3></a>

      <div className="email">
        <h2 className="email__heading">{!submitted ? 'join the mailing list' : 'thank you!'}</h2>
        <div className="email__main">
          <input 
            ref={input}
            name="email"
            value={email}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="Email Address"
          >
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

export default Home