import React from 'react'
import Axios from 'axios'
import UserService from '../Services/Users.js'
import './css/LogInForm.css'
const qs = require('qs');
import { Redirect } from 'react-router';
const userIcon =require("../icons/userNameIcon.png")
const passwordIcon=require("../icons/passwordIcon.png")

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
            redirectNotFound:false,
            errorLogin:undefined
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
        promise.then(response=>{
            let {exception}=response.data
            if(exception)
                throw new Error(exception['message'])
            self.props.userOnline(self.state.userName)
            self.props.onSignOut()
            self.props.setSignIn(false)
        })
        .catch(error=>{
            this.setState({errorLogin:error.message});
            //window.location.assign("/sample");            
        })

    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        let {errorLogin,redirectNotFound}=this.state
        if (redirectNotFound) {
            this.setState({redirectNotFound:false})
            return <Redirect push to="/NotFound" />;
          }
        return (
            <form className="LogInForm border border-dark">
                <div className="form-group">
                <img src={userIcon} className="img-responsive zmdi zmdi-link" alt="Responsive image " width="30" height="24" /> 
                    <label htmlFor="userNameNode">Usuario</label>
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
                <img src={passwordIcon} className="img-responsive zmdi zmdi-link" alt="Responsive image " width="30" height="24" /> 
                    <label htmlFor="userNameNode">Contraseña</label>
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
               { errorLogin && <h6 className="errorLoginClass">{errorLogin}</h6>}
            </form>
        )
    }
}

export default LogInForm