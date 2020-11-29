import React, {Component} from 'react'

const {Provider, Consumer} = React.createContext()



class ThemeContextProvider extends Component {
    state= {
        Content: [
             {
                Title: "Rock House",
                Description: "How do you make a house like this.",
                Img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.houselogic.com%2Fphotos%2Fhouse-hunting%2Fugly-houses%2Fslide%2Fa-house-that-rocks%2F&psig=AOvVaw0JO_70BCXphMVsJj-9fjQB&ust=1606676658911000&source=images&cd=vfe&ved=2ahUKEwifsLqN96XtAhUDKlMKHQE2DJcQr4kDegUIARDbAQ"
            },
             {
                Title: "Haunted House",
                Description: "Would you spend the night in this house.",
                Img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mypropertynation.com%2Fyou-can-sell-your-ugly-house-without-a-realtor-heres-how%2F&psig=AOvVaw0JO_70BCXphMVsJj-9fjQB&ust=1606676658911000&source=images&cd=vfe&ved=2ahUKEwifsLqN96XtAhUDKlMKHQE2DJcQr4kDegUIARDdAQ"
            },
             {
                Title: "Shoe House",
                Description: "I wonder how it looks inside",
                Img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F497014508855556351%2F&psig=AOvVaw0JO_70BCXphMVsJj-9fjQB&ust=1606676658911000&source=images&cd=vfe&ved=2ahUKEwifsLqN96XtAhUDKlMKHQE2DJcQr4kDegUIARDjAQ"

            }


            
        ]
        
    }
        render() {
            // console.log(this.state.Content)
            return (
            <Provider value= {this.state.Content}>
                {this.props.children}
            </Provider>
            )
        }

}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}