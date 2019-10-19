import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Layout from './Components/Layout'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound.js'
import NewUser from './Pages/NewUser.js'
function App(){
  //render() {
    return (
      <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/"  component={Home}></Route>
          <Route exact path="/register" component={NewUser}></Route>
          <Route component={NotFound}/>
        </Switch>
      </Layout>
      </BrowserRouter>
    );
  }
//}

export default App;
