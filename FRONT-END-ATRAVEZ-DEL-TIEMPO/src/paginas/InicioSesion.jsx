import React from "react";
//import "../components/styles/Iniciosesion.css";
import { Link } from "react-router-dom";

import InsigniaFormulario from "../components/InsigniaFormulario";

class InicioSesion extends React.Component {
  state = {
    form: {
      user: "",
      pass: "",
      correo: "",
      grupo: ""
    }
  };

  handleChange = (e) => {
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;
    this.setState({
      form: nextForm
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h1 className="tituloingresar">Iniciar sesión</h1>
              <InsigniaFormulario
                onChange={this.handleChange}
                formValues={this.state.form}
              />
              <h5 className="regis1">No tienes una cuenta?</h5>
              <Link to="/registro" className="regis2 btn">
                Registrate
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InicioSesion;
