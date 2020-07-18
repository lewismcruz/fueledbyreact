import React from "react";

function NavTabs(props) {
    return (
        <ul className="nav nav-tabs">
          <li className="nav-item">
              <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
                Home
              </a>
          </li>
          <li className="nav-item">
              <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
                  About
              </a>
          </li>
          <li className="nav=item">
              <a href="#resume" onClick={() => props.handlePageChange("Resume")} className="nav-link">
                  Resume
              </a>
          </li>
          <li className="nav=item">
              <a href="#interestingpeople" onClick={() => props.handlePageChange("InterestingPeople")} className="nav-link">
                  CoolPeople
              </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
              Contact
            </a>
          </li>
        </ul>
    );
}

export default NavTabs;


//===============================================================
// Can create a NavBar with this code snippet or stick with nav-tabs
/*
 return (
        <navbar className="navbar">
            <div><p>Placeholder Text</p></div>
        </navbar>
    );
*/