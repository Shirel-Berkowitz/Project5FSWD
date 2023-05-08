import React, { Component } from 'react';
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
class Login extends Component {
    state = { 
        name: "",
        password: ""
     } 
    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    changedName=(val)=>{
      this.setState({name: val});
    }
    changedPassword=(val)=>{
        this.setState({password: val});
      }
    log(){
        //check that everything works
        //save to storage
        
        //go to logged page
    }
    render() { 
        return (
            <div>
                <h2>Please enter your name:</h2>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(e)=>this.changedName(e.target.value)}
                ></input>
                <h2>Please enter your password:</h2>
                <input
                    value={this.state.password}
                    onChange={(e)=>this.changedPassword(e.target.value)}
                ></input>
                <button onClick={this.log}>log in</button>
            </div>
            
        );
    }
}
export default Login;

