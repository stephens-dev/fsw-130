import React, { Component } from 'react'
import { ThemeContextConsumer, } from './Data'



function Header() {
    return(
        <ThemeContextConsumer>
            { ({handleChange,addData}) => 
        <div>
            <input name="Title" onChange={handleChange} id="Title" placeholder="Title" type="text"   />
            <input name="Description" onChange={handleChange} id="Description" placeholder="Description" type="text" />
            <input name="Img" onChange={handleChange} id="Img" placeholder="Image" type="text" />
            <button onClick={addData}>Submit</button>
        </div>
            }
        </ThemeContextConsumer>
    )
}

export default Header