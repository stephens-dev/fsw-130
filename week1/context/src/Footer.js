import React, {Component} from "react"
import ThemeContext from "./themeContext"

function Footer(props) {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <footer className={`${theme}-theme`}>
                    <h2>This is a Themed Footer</h2>
                </footer>
            )}
        </ThemeContext.Consumer>
    )    
}

export default Footer
