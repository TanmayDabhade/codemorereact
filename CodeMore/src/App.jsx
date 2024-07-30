import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Getdata from './Getdata';
import Navbar from './Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data-python" element={<Getdata prop="Python" />} />
        <Route path="/data-cpp" element={<Getdata prop="C++" />} />
        <Route path="/data-swift" element={<Getdata prop="Swift" />} />
      </Routes>
    </Router>
  );
}

export default App;
