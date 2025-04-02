// RESOURCES

// Spec (synthesize and commit)
// https://mail.google.com/mail/u/1/#inbox/FMfcgzQVzXZpsvcvsmVBZBqnswflgcQg
// https://chatgpt.com/c/67e24c79-35c0-8007-8729-5a834c5e3e41
// https://web.telegram.org/a/#5198059615

// Typescript
// https://www.typescriptlang.org/docs/handbook/intro.html
// https://typehero.dev/tracks/typescript-foundations
// https://dev.to/deepeshk1204/best-practices-of-reactjs-with-typescript-24p4

// Shadcn/ui
// https://www.youtube.com/watch?v=AqmMx_JidGo
// https://ui.shadcn.com/docs

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// GLOBAL STYLES 

import './globals.css';

// COMPONENTS

// Layout
import Nav from './components/layout/Nav/Nav';
import Footer from './components/layout/Footer/Footer';

// Routes
import Home from './components/routes/Home/Home';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App