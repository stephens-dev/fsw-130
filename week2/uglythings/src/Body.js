import React from 'react'
import { ThemeContextConsumer } from './Data'



function Display(props) {
    return(
        <ThemeContextConsumer> 
        {({context}) => (
            
            <div className="container">
                {context.map(
                    ((item,index) => {return(
                        <div key = {index}>
                        <h1>
                    {item.Title}
                </h1>
                <h3>
                    {item.Description}
                </h3>
                <img src={item.Img}/>
                </div>
                    )})
                )}
            </div>
        )}
        </ThemeContextConsumer>
    )
}

export default Display