import React, { Component, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { increment, reset } from './features/counter/counterSlice';
const configureStore = require ('./app/store')




class Display extends Component {

    constructor() {
        super()
        
        this.state = {
            secondsPassed: 0
        }
        this.incrementor = null
    }

    miliseconds = () => {
        return (  (Math.floor(this.state.secondsPassed / 1.5 ) %60));
    }

    Seconds = () => {
        return ( (Math.floor(this.state.secondsPassed / 100) % 60));
    }

    Minutes = () => {
        return (Math.floor(this.state.secondsPassed / 6000) %60);
    }

    handleStart = () => {
        // console.log(configureStore)
        configureStore.default.subscribe(() => {
            // console.log(configureStore.default.getState())
            this.setState({secondsPassed: configureStore.default.getState().counter.value})
        })
        
        this.incrementor = setInterval(() => { 
        configureStore.default.dispatch(increment()) 
      }
      , 10);
      
    }


    Reset = () => {
        configureStore.default.dispatch(reset())
    }

    Lap = () => {
       let newTime = document.getElementById("new")
    
       let newDoc = document.createElement("li")
   
    let prevTime = document.getElementById ("prev")
        newDoc.textContent = this.Minutes() + ": " + this.Seconds() + ": " + this.miliseconds()
        newTime.append(newDoc)
        
    }

    handleStop = () => {
        clearInterval(this.incrementor)
        this.incrementor = null
    }

    


    render() {
        return (
          <div className="content">
            <h1 id="prev">{ this.Minutes() } : { this.Seconds() } : { this.miliseconds()}</h1>
            <ul id="new"></ul>
            <button onClick={ this.handleStart }>Start</button> 
            <button onClick={ this.handleStop }>Stop</button>
            <button onClick={this.Reset} >Reset</button>
            <button onClick={this.Lap}>Lap</button>
          </div>
        )
      }
    }




export default connect() (Display)