import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/counter">Ass1</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/nav">Ass2</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/todo">Ass3</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/proptoc">Ass4</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/arraymap">Ass5</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/parent">Ass6</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/lifecycle">Ass7</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/afruits">Ass8</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/combine">Ass9</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/redus">Ass10</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/valid">Ass11</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/product">Ass12</Link>
              </li>

            </ul>
      </nav>
    </>
  )
}

export default Navbar