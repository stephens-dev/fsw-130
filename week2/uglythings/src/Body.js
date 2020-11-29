import React from 'react'
import { ThemeContextConsumer } from './Data'



function Display(props) {
    return(
        <ThemeContextConsumer> 
        {context => (
            <div>
                {/* {console.log(context)} */}
                <h1>
                    {context[0].Title}
                </h1>
                <h3>
                    {context[0].Description}
                </h3>
                <img src={context[0].Img}/>
            </div>
        )}
        </ThemeContextConsumer>
    )
}

export default Display