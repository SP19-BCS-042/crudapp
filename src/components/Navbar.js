import React from 'react'
import { Link } from 'react-router-dom'
// import About from './About'
//import propTypes from 'prop-types'

      export default function Navbar(props) {
        return (
          <div> 
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
        <div className="container-fluid">
              <Link className="navbar-brand" to="/">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">{props.aboutText}</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">{props.link}</Link>

                  </li>
            </ul>


            <form className="d-flex">

            <div className={`form-check form-switch mx-3 text-${props.redMode==="light"? "dark": "dark"}`}>
              <input className="form-check-input" onClick={props.toggleRedMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Red Mode</label>
            </div>

            <div className={`form-check form-switch mx-3 text-${props.greenMode==="light"? "dark": "dark"}`}>
              <input className="form-check-input" onClick={props.toggleGreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Green Mode</label>
            </div>

            <div className={`form-check form-switch text-${props.mode==="light"? "dark": "light"}`}>
            <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Blue Mode</label>
           </div>
            </form>
            
          </div>
        </div>
        
      </nav>
          </div>
        )
      }

// Navbar.propTypes = 
// {
//     title: propTypes.string,
//     aboutText: propTypes.string
// };

// Navbar.defaultProps ={
//     title: 'set title here'
// }