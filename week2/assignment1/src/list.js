import React, {Component} from "react"
// import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils"
const {Provider, Consumer} = React.createContext()



class ThemeContextProvider extends Component {
    state = {
        movies: 
        [
           "Lilo & Stitch",
           "The Lion King",
           "Toy Story",
           "Bugs Life",
           "Frozen"
        ]
        
    }

    render() {
        return (
            <Provider value= {this.state.movies}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
