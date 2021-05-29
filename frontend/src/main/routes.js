import React from "react";

import Home from "../views/Home";
import Login from "../views/Login";
import CadastroUsuario from "../views/CadastroUsuario";
import ConsultaLancamentos from "../views/ConsultaLancamentos";

import { Route, Switch, HashRouter } from "react-router-dom";

function Routes() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro-usuarios" component={CadastroUsuario} />
        <Route path="/consulta-lancamentos" component={ConsultaLancamentos} />
      </Switch>
    </HashRouter>
  );
}
export default Routes;
