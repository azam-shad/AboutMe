import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Abouts from './pages/about/Abouts';
import Header from './pages/header/Header';
import Resumes from './pages/resume/Resumes';
import Navbar from './pages/navbar/Navbar';
import ContactUs from './pages/contact/ContactUs';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Header />} />
          {/* <Route exact path='/home' element={<Header />} /> */}
          <Route exact path='/home' element={<Header />} />
          <Route exact path='/about' element={<Abouts />} />
          <Route exact path='/resume' element={<Resumes />} />
          <Route exact path='/contacts' element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
