import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Posts from './Pages/Posts/Posts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
