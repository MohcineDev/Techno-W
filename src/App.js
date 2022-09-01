import React, { useState } from 'react'
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Posts from './Pages/Posts/Posts'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { loginContext } from './Contexts/Login'

function App() {

  const [logged, setlogged] = useState(false)

  return (
    <div className="App">
      <loginContext.Provider value={{logged, setlogged}}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            {
              logged ? <Route path="/posts" element={<Posts />} /> :''
            }
          </Routes>
        </BrowserRouter>
      </loginContext.Provider>
    </div>
  );
}

export default App;
