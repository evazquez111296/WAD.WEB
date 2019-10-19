import React from 'react'
import Axios from 'axios'
import UserService from '../Services/Users.js'
import './css/LogInForm.css'
const qs = require('qs');
import { Redirect } from 'react-router';

class LogInForm extends React.Component{


    constructor(props){
        console.log("LoginForm constructor was called")
        super(props)
        this._setInitialState()
    }
    _setInitialState(){
        this.state={
            userName:'',
            password:'',
            redirectNotFound:false
        }
    }
    
    /**
     * @param {Event} e Evento que emite el botón al dar click. 
     */
    handleSubmit=(e)=>{
        e.preventDefault()//Cancela el evento al hacer click.
        var self=this;
        var b=Axios
        var service=new UserService()
        const params = new URLSearchParams();
        console.log(self.state)
        var promise=service.LoginUser(self.state)
        promise.then(function(response){
            var a=response.data
            debugger;
        })
        .catch(error=>{
            this.setState({redirectNotFound: true});
            let {status}=error.response
            //window.location.assign("/sample");            
        })

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        if (this.state.redirectNotFound) {
            this.setState({redirectNotFound:false})
            return <Redirect push to="/NotFound" />;
          }
        return (
            <form className="LogInForm">
                <div className="form-group">
                    <label htmlFor="userNameNode">UserName</label>
                    <input
                        onChange={this.handleChange}
                        name="userName"
                        className="form-control"
                        placeholder="Nombre de usuario"
                        type="text"
                        value={this.state.userName}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userNameNode">Password</label>
                    <input
                        onChange={this.handleChange}
                        name="password"
                        className="form-control"
                        placeholder="Contraseña"
                        type="password"
                        value={this.state.password}
                    />
                </div>
                <div
                    onClick={this.handleSubmit}
                    type="button"
                    className="btn btn-success btnLogIn btnCreate"
                >Entrar
                </div>
            </form>
        )
    }
}

export default LogInForm