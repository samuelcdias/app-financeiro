import React from 'react'
import Card from '../components/card'
import FormGroup from '../components/form-group'
import { withRouter } from 'react-router-dom'

class CadastroUsuario extends React.Component{
  state = {
    nome: '',
    email: '',
    senha: '',
    senhaRepeticao: ''
  }
  cancelar = () => {
    this.props.history.push('/login')
  }

  cadastrar = () => {
    console.log(this.state)
  }

  render(){
    return(
        <Card title="Cadastro de usuário">
          <div className="row">
            <div className="col-lg-12">
              <div className="bs-component">
                <FormGroup label="Nome: *" htmlFor="inputNome">
                    <input type="text"
                            id="inputNome"
                            className="form-control"
                            name="nome"
                            onChange={e => this.setState({nome: e.target.value})} />
                 </FormGroup>

                 <FormGroup label="Email: *" htmlFor="inputEmail">
                    <input type="email"
                            id="inputEmail"
                            className="form-control"
                            name="email"
                            onChange={e => this.setState({email: e.target.value})} />
                 </FormGroup>

                 <FormGroup label="Senha: *" htmlFor="inputSenha">
                    <input type="password"
                            id="inputSenha"
                            className="form-control"
                            name="senha"
                            onChange={e => this.setState({senha: e.target.value})} />
                 </FormGroup>

                 <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                    <input type="password"
                            id="inputRepitaSenha"
                            className="form-control"
                            name="senha"
                            onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                 </FormGroup>

                  <button onClick={this.cadastrar} type="button" className="btn btn-success">Salvar</button>
                  <button onClick={this.cancelar} type="button" class="btn btn-danger">Cancelar</button>
              </div>
            </div>
          </div>
        </Card>
    )
  }
}
export default withRouter(CadastroUsuario)