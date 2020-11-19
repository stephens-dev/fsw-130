import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Main(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <body className={`${theme}-theme`}>
                    <h2>This is a Themed Body</h2>
                </body>
            )}
        </ThemeContext.Consumer>
    )    
}

export default Main
