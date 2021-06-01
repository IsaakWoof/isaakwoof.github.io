import React from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css'




function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  container">
    <a className="navbar-brand" href=" ">Social Awkwardness</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavDropdown">
      <ul className="navbar-nav  ">
        <li className="nav-item active">
          <a className="nav-link" href=" ">Start</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Settings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" ">Help</a>
        </li>
      
      </ul>
    </div>
  </nav>
  );
}
export default Header;