import React from 'react'
import { NavLink } from 'react-router-dom'

export const ErrorPage = () => {
  
  return (
    <div className='error'>
      <hgroup>
        <p>¯\_(ツ)_/¯</p>
        <h1 className='error__code'> <b>404</b> </h1>
        <p>Have you lost your way?</p>
      </hgroup>

      <NavLink to="/">
        <button className='secondary'>Homepage</button>
      </NavLink>
    </div>
  )
}
