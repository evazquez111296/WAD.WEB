import React from 'react'
import NavBar from './NavBar.js'
function Layout(props){
    
    let {canSignIn,canSignOut,userOnline}=props

    return(
        <React.Fragment>
                <NavBar 
                    canSignIn={canSignIn}
                    canSignOut={canSignOut}
                    userOnline={userOnline}
                    />
                {props.children}
        </React.Fragment>
    )   
    
}

export default Layout;