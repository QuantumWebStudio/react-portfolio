import React from 'react'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <h1>
        Ops Sorry!
      </h1>
      <NavLink to='/'>Homepage</NavLink>
    </div>
  )
}

export default ErrorPage
