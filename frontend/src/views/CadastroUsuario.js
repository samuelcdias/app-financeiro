import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";

class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  cadastrar = () => {
    console.log(this.state);
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
                <button type="button" className="btn btn-danger">
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

export default CadastroUsuario;
