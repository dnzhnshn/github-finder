import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Users from './Users'
import Search from './Search'
import Alert from './Alert'
import About from './About'
import UserDetails from './UserDetails'
import NotFound from './NotFound'

import GithubFinderState from '../context/githubFinderState';
import {BrowserRouter,Route,Switch} from 'react-router-dom';


 const App = ()=>{
    return (
      <GithubFinderState>
            <BrowserRouter>    
              <Navbar></Navbar>
              <Alert></Alert>
              <Switch>
              <Route exact path="/" render={props=>(
                <>
                <Search></Search>
                <Users></Users>
                </>
              )}/>
              <Route exact path="/about" component={About} ></Route>
              <Route path="/user/:login" render= {props => (
                            <UserDetails {...props}/>
                            )} />
              <NotFound component={NotFound} ></NotFound>
              </Switch>     
          </BrowserRouter>   
      </GithubFinderState>     
    )
  }

  export default App;