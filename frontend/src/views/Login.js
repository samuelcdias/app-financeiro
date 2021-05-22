import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import { withRouter } from "react-router-dom";

import UsuarioService from "../app/service/usuarioService";
import LocalStorageService from "../app/service/localStorageService";

class Login extends React.Component {
  constructor() {
    super();
    this.service = new UsuarioService();
  }

  state = {
    email: "",
    senha: "",
    mensagemErro: null,
  };

  entrar = () => {
    this.service
      .autenticar({
        email: this.state.email,
        senha: this.state.senha,
      })
      .then((response) => {
        LocalStorageService.adicionarItem("_usuario_logado", response.data);
        this.props.history.push("/home");
      })
      .catch((erro) => {
        this.setState({ mensagemErro: erro.response.data });
      });
    console.log("Email: ", this.state.email);
    console.log("Senha: ", this.state.senha);
  };

  prepareCadastrar = () => {
    this.props.history.push("/cadastro-usuarios");
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{ position: "relative", left: "300px" }}
          >
            <div className="bs-docs-section">
              <Card title="Login">
                <div className="row">
                  <span> {this.state.mensagemErro}</span>
                  <div className="col-lg-12">
                    <div className="bs-component">
                      <fieldset>
                        <FormGroup label="Email: *" htmlFor="InputEmail">
                          <input
                            type="email"
                            value={this.state.email}
                            onChange={(e) =>
                              this.setState({ email: e.target.value })
                            }
                            className="form-control"
                            data-test="InputEmail"
                            id="InputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Digite o Email"
                          />
                        </FormGroup>

                        <FormGroup label="Senha: *" htmlFor="InputPassword">
                          <input
                            type="password"
                            value={this.state.senha}
                            onChange={(e) =>
                              this.setState({ senha: e.target.value })
                            }
                            className="form-control"
                            data-test="InputPassword"
                            id="InputPassword"
                            placeholder="Digite a senha"
                          />
                        </FormGroup>

                        <button
                          onClick={this.entrar}
                          className="btn btn-success"
                        >
                          Entrar
                        </button>
                        <button
                          onClick={this.prepareCadastrar}
                          className="btn btn-danger"
                        >
                          Cadastrar
                        </button>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
