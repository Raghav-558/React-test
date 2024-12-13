import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './view/Home';
import About from './view/About';
import Features from './view/Features';
import Blogs from './view/Blogs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
