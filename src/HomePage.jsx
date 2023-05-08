import React, { Component } from 'react';
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Login from './Login'

class HomePage extends Component {
    state = {  } 
    //make a constructor that wipes the local storage clean
    render() { 
        return (
            <div>
                <h1>hello, welcome to our app</h1>
                <button><Link to="/login">Log in</Link></button>
                
            </div>
        );
    }
}
 
export default HomePage;