import React from "react";
import Login from "../views/Login";
import CadastroUsuario from "../views/CadastroUsuario";

import "../custom.css";
import "bootswatch/dist/flatly/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <CadastroUsuario />
      </div>
    );
  }
}

export default App;
