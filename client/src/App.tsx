import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// GLOBAL STYLES 

import './globals.css';

// COMPONENTS

// Layout
import Nav from './components/layout/Nav/Nav';
import Footer from './components/layout/Footer/Footer';

// Routes
import Home from './components/routes/Home/Home';
import Demo from './components/routes/Demo/Demo';

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path ="/demo" element={<Demo />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App