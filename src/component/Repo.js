import React from 'react'

 const Repo = ({repo}) => {
  return ( 
      <li className="list-group-item" key={repo.id}>
            <i className="far fa-dot-circle"></i>  {repo.full_name}
      </li>
  )
}

export default Repo

