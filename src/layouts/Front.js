import React from 'react';
import {Link} from 'react-router-dom';

function Front(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary shadow sticky-top">
        <div className="container" >
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
              <li className="nav-item">
                <Link className="nav-link" to="/list/addstudent">Registration</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">List</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">My Profile</Link>
              </li>



            </ul>
    
          </div>
        </div>
      </nav>

    ) ;
    

}
export default Front;