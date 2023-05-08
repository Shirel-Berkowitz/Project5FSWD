import React, { Component } from 'react';
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage';
class Logged extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <h1>welcome, user!</h1>
                <button><Link to="/">Logout</Link></button>
                <button><Link to="/albums">albums</Link></button>
                <button><Link to="/posts">posts</Link></button>
                <button><Link to="/todos">todos</Link></button>
                <button><Link to="/info">info</Link></button>  
                <Routes>
                    <Route path="/albums" element={<Albums/>}/>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/todos" element={<Todos/>}/>
                    <Route path="/info" element={<Info/>}/>
                </Routes>    
            </div>
            
        );
    }
}
 
export default Logged;