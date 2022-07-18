import React, { useContext, useState } from 'react'
import githubFinderContext from '../context/githubFinderContext'

const Alert = () => {
  const GithubContext=useContext(githubFinderContext);
  const{alert}=GithubContext;
  return (     
    <div className="container my-2">
        {alert!=null && <div className={`alert alert-${alert.type}`} role="alert">
        {alert.msg}
   </div>}   
    </div>
  )
}
export default Alert