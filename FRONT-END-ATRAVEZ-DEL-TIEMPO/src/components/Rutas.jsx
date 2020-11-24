import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "../paginas/Home";
import Iniciosesion from "../paginas/InicioSesion";
import Registro from "../paginas/Registro";
import Quiz from "../paginas/Quiz";
import Ajustes from "../paginas/Ajustes";
import Quiz1 from "../paginas/Quiz1";

function Rutas() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/iniciarsesion" component={Iniciosesion} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/Ajustes" component={Ajustes} />
          <Route exact path="/Quiz1" component={Quiz1} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default Rutas;
