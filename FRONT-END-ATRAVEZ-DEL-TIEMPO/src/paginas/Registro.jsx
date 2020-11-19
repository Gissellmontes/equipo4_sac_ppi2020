import React from "react";
//import "../components/styles/Iniciosesion.css";
import InsigniaFormulario from "../components/InsigniaFormulario";
import { Link } from "react-router-dom";

class Registro extends React.Component {
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
              <h1 className="tituloingresar">Registrarse</h1>
              <InsigniaFormulario
                onChange={this.handleChange}
                formValues={this.state.form}
              />
              <h5 className="regis1">¿Ya tienes una cuenta?</h5>
              <Link to="/InicioSesion" className="regis2 btn">
                Inicia Sesión
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;
