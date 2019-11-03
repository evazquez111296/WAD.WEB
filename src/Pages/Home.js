import React from 'react'
import './styles/Home.css'
import LogIn from '../Components/LogInForm'

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="d-flex justify-content-end Home">
                <LogIn onSignOut={this.props.onSignOut}
                       userOnline={this.props.userOnline}
                       setSignIn={this.props.setSignIn}
                       getAppPropertyState={this.props.getAppPropertyState}
                       setAppState={this.props.setAppState}/>
            </div>
        )
    }
}

export default Home;