import React from 'react'
import './styles/Home.css'
import LogIn from '../Components/LogInForm'

class Home extends React.Component{
    render(){
        return (
            <div className="d-flex justify-content-center Home">
                <LogIn/>
            </div>
        )
    }
}

export default Home;