import React, { Component } from 'react'
import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';

class User extends Component { 
  render() {
      const {name,id,login,avatar_url,html_url,followers}=this.props.user;
    return (
     <div className="col-md-3">
        <div className="card mt-2">
            <img src={avatar_url} className="img-fluid"></img>               
                    <div className="card-body">
                       <h5 className="card-title">{login}</h5>
                       <Link to={`/user/${login}`} className="btn btn-primary btn-sm">Go Profile</Link>
                    </div>
                </div>       
             </div>       
    )
  }
}

export default User
