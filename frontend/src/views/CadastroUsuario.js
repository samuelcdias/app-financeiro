import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import { withRouter } from "react-router-dom";

import UsuarioService from "../app/service/usuarioService";
import { mensagemSucesso, mensagemErro } from "../components/Toastr";

class CadastroUsuario extends React.Component {
  constructor() {
    super();
    this.service = new UsuarioService();
  }

  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  validar() {
    const msgs = [];
    if (!this.state.nome) {
      msgs.push("O campo Nome é obrigatório.");
    }

    const emailRegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/;
    if (!this.state.email) {
      msgs.push("O campo Email é obrigatório.");
    } else if (!this.state.email.match(emailRegExp)) {
      msgs.push("Informe um Email válido.");
    }

    if (!this.state.senha || !this.state.senhaRepeticao) {
      msgs.push("Digite a senha 2x");
    } else if (this.state.senha !== this.state.senhaRepeticao) {
      msgs.push("As senhas não conferem.");
    }

    return msgs;
  }

  cadastrar = () => {
    const msgs = this.validar();

    if (msgs && msgs.length > 0) {
      msgs.forEach((msg) => {
        mensagemErro(msg);
      });
      return false;
    }

    const usuario = {
      nome: this.state.nome,
      email: this.state.email,
      senha: this.state.senha,
    };

    this.service
      .salvar(usuario)
      .then((response) => {
        mensagemSucesso(
          "Usuario cafastrado com sucesso! Faça o Login para acessar o sistema."
        );
        this.props.history.push("/login");
      })
      .catch((error) => {
        mensagemErro(error.response.data);
      });
  };

  cancelar = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="container">
        <Card title="Cadastro de Usuário">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome: *" htmlFor="inputNome">
                  <input
                    type="text"
                    className="form-control"
                    data-test="inputNome"
                    id="inputNome"
                    name="nome"
                    onChange={(e) => this.setState({ nome: e.target.value })}
                    aria-describedby="emailHelp"
                    placeholder="Digite o Nome"
                  />
                </FormGroup>

                <FormGroup label="Email: *" htmlFor="inputEmail">
                  <input
                    type="email"
                    className="form-control"
                    data-test="inputEmail"
                    id="inputEmail"
                    name="email"
                    onChange={(e) => this.setState({ email: e.target.value })}
                    aria-describedby="emailHelp"
                    placeholder="Digite o Email"
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    Não divulgamos o seu email.
                  </small>
                </FormGroup>

                <FormGroup label="Senha: *" htmlFor="inputSenha">
                  <input
                    type="password"
                    className="form-control"
                    data-test="inputSenha"
                    id="inputSenha"
                    name="password"
                    onChange={(e) => this.setState({ senha: e.target.value })}
                    placeholder="Senha"
                  />
                </FormGroup>

                <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                  <input
                    type="password"
                    className="form-control"
                    data-test="inputRepitaSenha"
                    id="inputRepitaSenha"
                    name="repita-senha"
                    onChange={(e) =>
                      this.setState({ senhaRepeticao: e.target.value })
                    }
                    placeholder="Senha"
                  />
                </FormGroup>

                <button
                  type="button"
                  className="btn btn-success"
                  onClick={this.cadastrar}
                >
                  Salvar
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.cancelar}
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default withRouter(CadastroUsuario);
