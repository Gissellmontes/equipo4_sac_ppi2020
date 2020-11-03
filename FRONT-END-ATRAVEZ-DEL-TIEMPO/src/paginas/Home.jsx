import React from "react";
/* import { Link } from "react-router-dom";
import header from "../images/header.png"; */

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container"></div>
          </div>
        </div>
        <h1 className="maintitle">A través del tiempo</h1>
        <div class="with-bg-size"></div>

        <div class="ingresar-card">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              {/*  <Link to="/iniciarsesion" className="ingresar btn btn-light">
                Iniciar sesión
              </Link> */}
            </li>
            <li class="list-group-item">
              {/*   <Link to="/registro" className="ingresar btn btn-light">
                Registrarse
              </Link> */}
            </li>
          </ul>
        </div>

        <div class="card-deck">
          <div class="card">
            <img
              src="https://comps.canstockphoto.es/kawaii-computadora-de-computadora-eps-vectorial_csp59451780.jpg"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Situación del problema</h5>
              <p class="card-text">
                En él área de tecnología e informática de Santos Ángeles
                Custodios se necesita reforzar el conocimiento de cambios
                importantes en la tecnología a través del tiempo.
              </p>
            </div>
          </div>
          <div class="card">
            <img
              src="data:image/jpeg;base64,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"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Objetivo</h5>
              <p class="card-text">
                Es crear una aplicación para la institución educativa santos
                ángeles custodios en el área de tecnología e informática para
                los grados sexto y séptimo de básica secundaria para reforzar el
                conocimiento de los cambios de la evolución de la tecnología a
                través del tiempo
              </p>
            </div>
          </div>
        </div>

        <div class="card-deck card text-center">
          <div class="card-body">
            <h5 class="card-title">Sobre nosotros</h5>
            <p class="card-text">
              Somos estudiantes de la institución educativa santos angeles
              custodios del grado 11-2 también somos de la media técnica
              desarrollo de software
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
