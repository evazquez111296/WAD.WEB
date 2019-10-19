import React from 'react'
import ReactDom from 'react-dom'
import './css/NavBar.css'
import {Link} from 'react-router-dom'

class NavBar extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){
        return (
        <div className='Navbar'>
                <Link to="/register"
                type="button"
                style={{paddingLeft:"1em"}}
                className="btn btn-success float-right Navbar__btn">
                    Sign in
                </Link>
                <Link to="/"
                type="button"
                onClick={this._signOutHandler}
                className="btn btn-success float-right Navbar__btn">
                    Sign out
                </Link>
        </div>
                
        )
    }

    _signOutHandler(){
        alert("Cerrando la session")
    }
}

export default NavBar