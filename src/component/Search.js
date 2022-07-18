import React, { useContext, useState } from 'react'
import githubFinderContext from '../context/githubFinderContext';

const Search = () => {

const GithubContext=useContext(githubFinderContext);
const {setAlerts,clearUser,users,searchUsers}=GithubContext;

let [keyword,setKeyword]=useState('');    

   const onChange=(e)=>{
    setKeyword(e.target.value);
    }
     
    const onSubmit=(e)=>{
        e.preventDefault();
        if(keyword===""){
            setAlerts("there is no result","danger");
        }else{
            searchUsers(keyword);
            setKeyword(keyword="");
        }       
    }

    return (
        <div className="container mt-3">
        <form onSubmit={onSubmit}>   
            <div className="input-group">
                <input type="text"  value={keyword} onChange={onChange} className="form-control"></input>
                <div className="input-group-append">
                     <button type="submit" className="btn btn-primary">Search</button>
                </div>
            </div>
       </form>      
       {
         users.length >0 && <button className="btn btn-secondary btn-sm btn-block mt-3" onClick={clearUser}>Clear All Result</button>
       }     
      </div>
    )
  }

export default Search