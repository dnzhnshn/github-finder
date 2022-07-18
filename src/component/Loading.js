import React, { Component } from 'react'
import loading from '../styles/Loading_.gif'

export default class Loading extends Component {
  render() {
    return (
        <React.Fragment>
            <img src={`/${loading}`}  alt="Loading..." style={{width: '200px', display: 'block', margin: 'auto'}}/>
        </React.Fragment>
    )
  }
}

