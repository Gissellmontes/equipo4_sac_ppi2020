import React from "react";
import "./styles/Insignia.css";
import Logo from "../images/LogoWHITE.png";

class Insignia extends React.Component {
  render() {
    return (
      <div className="Insignia">
        <div className="Insignia_header">
          <img src={Logo} alt="logo" />
        </div>
        <div className="Insignia_section_name">
          <img
            className="Insignia__avatar"
            src={this.props.URLAvatar}
            alt="Foto de perfil"
          />
          <h1>
            {this.props.firstName}
            <br /> {this.props.lastName}{" "}
          </h1>
        </div>
        <div className="Insignia__section_info">
          <h3> {this.props.ocupacion}</h3>
          <div>{this.props.twitter}</div>
        </div>
        <div className="Insignia__footer">Derechos reservados</div>
      </div>
    );
  }
}

export default Insignia;
