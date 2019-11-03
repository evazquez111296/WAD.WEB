import React from 'react'
import ReactDom from 'react-dom'
import './css/NavBar.css'
import {Link} from 'react-router-dom'
import UserService from '../Services/Users.js'

class NavBar extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){
        let {userOnline,canSignIn}=this.props
        return (
                <div className='Navbar'>

               { canSignIn && <Link to="/register"
                type="button"
                style={{paddingLeft:"1em"}}
                className="btn btn-success float-right Navbar__btn">
                    Sign in
                </Link>
               }
        
                {this.props.canSignOut && <Link to="/"
                    type="button"
                    onClick={this._signOutHandler}
                    className="btn btn-success float-right Navbar__btn">
                        Sign out
                </Link>}
                { userOnline && <div className="userOnlineNode">
                    Bienvenid@ {userOnline}
                </div>
                }
        </div>
                
        )
    }

    _signOutHandler(){
        
        try{
            let service=new UserService()
            let promise=service.signOut()
            promise.then(response=>{
                debugger
            }).catch(error=>{
                alert(error)
            })
        }catch(exception){
            console.log(exception)
        }
    }
}

export default NavBar