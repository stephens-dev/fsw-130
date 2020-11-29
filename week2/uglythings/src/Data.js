import React, {Component} from 'react'
import Header from './Header'
const {Provider, Consumer} = React.createContext()


class ThemeContextProvider extends Component {
    state= {
        Content: [
            {
                Title: "Rock House",
                Description: "How do you make a house like this.",
                Img: "https://i.pinimg.com/originals/0f/be/54/0fbe545d6805b93a3c3ca18751b87d75.jpg"
            },
            {
                Title: "Haunted House",
                Description: "Would you spend the night in this house.",
                Img: "https://www.mypropertynation.com/wp-content/uploads/2019/09/You-Can-Sell-Your-Ugly-House-Without-A-Realtor-1.jpg"
            },
            {
                Title: "Shoe House",
                Description: "I wonder how it looks inside",
                Img: "https://i.pinimg.com/originals/c5/42/0b/c5420bbd11e3217e43453327b1e35da6.jpg"
                
            }
            
            
            
        ]
        
    }

             addData = () =>  {
                 this.setState(
                    prevState => {
                        var context = prevState.Content
                        
                    
                context.push({
                    Title: this.state.Title,
                    Description: this.state.Description,
                    Img: this.state.Img
                })
                return({Content: context})
            }
            )
            }
             handleChange = (e) =>  {
                e.preventDefault()
                const {name,value} = e.target
                this.setState(
                    {
                        [name]: value
                    }
                )
            }

        render() {
            // console.log(this.state.Content)
            return (
            <Provider value= {{context:this.state.Content, addData:this.addData, handleChange:this.handleChange}}>
                {this.props.children}
            </Provider>
            )
        }

}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}