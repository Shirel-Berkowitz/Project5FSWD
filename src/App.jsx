import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login'
import HomePage from './HomePage'
import Logged from './Logged'
import Posts from './Posts'
import './App.css'

function App() {
 
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logged/*" element={<Logged/>}/>
    </Routes>    
  </>
  )
}

export default App
/**
 *  
 * <>
  <h1>welcome to the app</h1>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
      <Link to="/login">Log</Link>
      </li>
    </ul>
  </nav>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </>
 */
