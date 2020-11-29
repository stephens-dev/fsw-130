// import logo from './logo.svg';
import { render } from '@testing-library/react';
import React from 'react'
import './App.css';
import {ThemeContextConsumer} from "./list"


function App(props) {

  function Maps(props) {
    
    return(
      
        <li>{props.item}</li>
      
    )
  }
  
  
  return (

    <ThemeContextConsumer>

          {context => (
            <div className="main">
              
              <input className="input" placeholder="New Movie" type="text"/>
              <button>Submit</button>
            <h1>
              <ul>
           { context.map(movie =>
              <Maps item={movie}/>
            )
          }
              </ul>
            </h1>
            </div>
          )}
       
       {/* {(context) => (
        <div>
        
          <h1>{maps()}</h1>
          
        </div>
      ) 
       } */}

        </ThemeContextConsumer>
  );
      

}
export default App;
