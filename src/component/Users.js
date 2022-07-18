import React, { Component, useContext } from 'react';
import User from './User';
import Loading from './Loading'
import githubFinderContext from '../context/githubFinderContext';


const Users=()=>{
  const GithubContext=useContext(githubFinderContext);
const {loading,users}=GithubContext;
if(loading){
  return <Loading></Loading>
}
    return (
      <div className="container mt-3">
          <div className="row"> 
          {
             users.map(user=>(
                      <User user={user} key={user.id}></User>                 
              ))                 
          }
          </div>           
      </div>
    )
}

export default Users