import React from "react";
import "../styles/navbar.css";
//import logonavbar from "../images/LogoBLACK.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        {/*  <Link to="/home" className="logo-navbar">
          <a class="navbar-brand">
            {
              <img
                className="img-fluid"
                src={logonavbar}
                alt="logonavbar"
                height="30px"
                width="30px"
              />
            }{" "}
            Correcta Expresión
          </a>
        </Link> */}

        <form class="form-inline">
          <Link to="/home" className="btn btn-light">
            Menú principal
          </Link>
          <Link to="/iniciarsesion" className="btn btn-light">
            Iniciar sesión
          </Link>
          <Link to="/registro" className="btn btn-light">
            Registrarse
          </Link>
          <Link to="/Quiz" className="btn btn-light">
            Quiz
          </Link>
        </form>
      </nav>
    );
  }
}

export default Navbar;
