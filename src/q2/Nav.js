import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item ">
                <Link class="nav-link active" aria-current="page" to="home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="about">About</Link>
              </li>
            </ul>
      </nav>
    
    </>

  )
}

export default Nav