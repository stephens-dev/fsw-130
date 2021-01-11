import React from 'react'
import {Link} from 'react-router-dom'
// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Nav'
// import { NavDropdown } from 'react-bootstrap'


function Header() {
    return(
        <header className="header">
        <div className="main_container">
            <Link to="/Movies" id="link">
            <div className="movie_display">
                    <h1>Movies</h1>
                    {/* <img src={pic}></img> */}
                    
            </div>
            </Link>
            <Link to="/TvShows" id="link">
            <div className="show_display">
                    <h1>TV Shows</h1>
                    {/* <img src={pic2}></img> */}
            </div>
            </Link>
        </div>
        </header>

        
    )
}

export default Header