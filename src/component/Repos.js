import React from 'react'
import Repo from './Repo'

 const Repos = ({repos}) => {

      return  repos.map((repo)=>{
            return <Repo repo={repo} key={repo.id}></Repo>
          })  
      }

export default Repos
