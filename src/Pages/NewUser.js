import React from 'react'
import './styles/NewUser.css'
import Form from '../Components/SignInForm'
class NewUser extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-center NewUser">
                <Form/>
            </div>
        )
    }
}

export default NewUser