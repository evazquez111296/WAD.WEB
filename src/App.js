import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound.js'
import NewUser from './Pages/NewUser.js'
class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      canSignIn:true,
      canSignOut:false,
      userOnline:undefined,
      errorLogin:undefined
    }
  }
  handleSignOut=()=>{
    this.setState({canSignOut:!this.state.canSignOut})
  }
  setSignIn=(flag)=>{
    this.setState({canSignIn:flag})
  }
  handleUserOnline=(userOnline)=>{
    this.setState({userOnline:userOnline})
  }
  setErrorLogin=(error)=>{
    this.setState({errorLogin:error})
  }
  setAppState=(property,value)=>{
    this.setState({[property]:value})
  }
  getAppPropertyState=(a)=>{
    return this.state[a];
  }
  render(){
    let {canSignIn,canSignOut,userOnline}=this.state

    return (
      <BrowserRouter>
      <Layout 
        canSignIn={canSignIn}
        canSignOut={canSignOut}
        userOnline={userOnline}
      >
        <Switch>
          <Route exact path="/"  
            component={
              ()=> <Home
               onSignOut={this.handleSignOut} 
               userOnline={this.handleUserOnline}
               setSignIn={this.setSignIn}
               setAppState={this.setAppState}
               getAppPropertyState={this.getAppPropertyState}
              />
            }
          >
          </Route>
          <Route exact path="/register" component={NewUser}></Route>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
