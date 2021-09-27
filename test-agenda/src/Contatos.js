import React from "react";
import EditarContact from "./EditarContact";

export default class Contatos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false
    }

    this.delete = this.delete.bind(this);
    this.switchEdit = this.switchEdit.bind(this);
  }

  delete() {
    const {id} = this.props.contato;
    const url = `http://localhost:3001/contatos/${id}`;

    fetch(url, {
      method: "DELETE"
    })

    this.props.fetchContatosCallback();
  }

  switchEdit() {
    this.setState({ editing: !this.state.editing })
  }

  render() {
    const { id, nome, email, telefone } = this.props.contato;

    return (
      <div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nome</th>
              <th scope="col">Email</th>
              <th>Telefone</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{id}</td>
              <td>{nome}</td>
              <td>{email}</td>
              <td>{telefone}</td>
              <td>
                <button class="btn btn-secondary" onClick={this.delete}>
                  Apagar
                </button>
              </td>
              
              <td>
                <button class="btn btn-primary"onClick={this.switchEdit}>Editar</button>

                {this.state.editing ? 
                  <EditarContact
                    contato={this.props.contato}
                    fetchContatosCallback={this.props.fetchContatosCallback}
                    switchEdit={this.switchEdit}
                  />
                : null}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
