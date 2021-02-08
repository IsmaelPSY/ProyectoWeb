import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Mas Vida</a>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
              </a>
            <ul className="side-nav" id="main-menu">
            <li><Link to="/">Mas Vida</Link></li>  
            <li><Link to="/meetups"><i className="fa fa-users"></i>Quiero un Centro de Salud</Link></li>  
            <li><Link to="/meetups/add"><i className="fa fa-plus"></i> Realizar Cita</Link></li>  
            <li><Link to="/meetups/add"><i className="fa fa-plus"></i> Mi diagnóstico</Link></li> 
            <li><Link to="/about"><i className="fa fa-question-circle"></i> Mas Información</Link></li> 
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;