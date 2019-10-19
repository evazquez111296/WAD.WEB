import React from 'react'
import ReactDom from 'react-dom'
import './css/SignInForm.css'

class SignInForm extends React.Component{
    render(){
        return (
            <form className="SignInForm border">
                <div className="form-group div_inputNode">
                    <label htmlFor="name">Nombre completo</label>
                    <input 
                          className="form-control inputField"
                          name="fullNameNode"
                    />
                </div>
                <div className="form-group div_inputNode">
                    <label htmlFor="emailNode">Email</label>
                    <input 
                          className="form-control inputField"
                          type="email"
                          name="emailNode"
                    />
                </div>
                <div className="form-group div_inputNode">
                    <label htmlFor="userNameNode">Usuario</label>
                    <input 
                          className="form-control inputField"
                          name="userNameNode"
                    />
                </div>
                <div className="form-group div_inputNode">
                    <label htmlFor="passwordNode">Password</label>
                    <input 
                          className="form-control inputField"
                          name="passwordNode"
                          type="password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPasswordNode">Confirma la contraseña</label>
                    <input 
                          className="form-control inputField"
                          name="repeatPasswordNode"
                          type="password"
                    />
                </div>
                <div
                    type="button"
                    className="btn btn-success btnCreate"
                    name="createAccountNode"
                >Crear cuenta
                </div>
            </form>
        )
    }
}

export default SignInForm