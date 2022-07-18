import React ,{ useReducer } from "react"
import githubfinderReducer from './githubfinderReducer'
import githubFinderContext from './githubFinderContext'
import axios from 'axios';

const githubFinderState=(props)=>{
    const initialState={
        user:{},
        users:[], 
        loading:false,
        alert:{},
        repos:[]
    }
    const [state,dispatch]=useReducer(githubfinderReducer,initialState);

    const searchUsers=(keyword)=>{
        setLoading(true);
        axios.get(`https://api.github.com/search/users?q=${keyword}`).then((res)=> {
        dispatch({
            type:"SEARCH_USER",
            payload:res.data.items
        })
        })
    }

    const clearUser=()=>{
        dispatch({type:"CLEAR_USER"})
        }
  
    const setAlerts=(msg,type)=>{
        dispatch({type:"ALERT",payload:{msg:msg,type:type}})       
        setTimeout(() => {
          dispatch({type:"ALERT",payload:{}})
        }, 3500); 
        }

    const getUser=(login)=>{
        setLoading(true);
        setTimeout(()=>{         
          axios.get(`https://api.github.com/users/${login}`).then(res => {
            dispatch({
                type:"SET_USER",                
                payload:res.data
            })
          });
          axios.get(`https://api.github.com/users/${login}/repos`).then(res => {
            dispatch({
                type:"SET_REPOS",                
                payload:res.data
            })
          });
        },1000);    
        }
    
    const setLoading=()=>{
        dispatch({type:"SET_LOADING"})
    }

    return <githubFinderContext.Provider
    value={{
        users:state.users,
        user:state.user,
        loading:state.loading,
        alert:state.alert,
        repos:state.repos,
        searchUsers,
        getUser,
        clearUser,
        setAlerts
    }}>{props.children}
    </githubFinderContext.Provider>
}




export default githubFinderState;

