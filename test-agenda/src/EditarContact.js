import React from "react";

export default class EditarContact extends React.Component {
  constructor(props) {
    super(props)

    const { nome, email, telefone } = props.contato;

    this.state = {
      nome: nome,
      email: email,
      telefone: telefone
    }

    this.updateNome = this.updateNome.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updateTelefone = this.updateTelefone.bind(this);
    this.update = this.update.bind(this);
  }

  updateNome(event) {
    this.setState({ nome: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value })
  }

  updateTelefone(event) {
    this.setState({ telefone: event.target.value })
  }

  update() {
    const { id } = this.props.contato;
    const { nome, email, telefone } = this.state
    const url = `http://localhost:3001/contatos/${id}`;

    const updateContato = {
      nome: nome,
      email: email,
      telefone: telefone
    }

    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateContato)
    })

    this.props.fetchContatosCallback()
    this.props.switchEdit()
  }

  render() {
    return (
      <div>
        <label>
          Editar Nome:
          <input type="text" class="editar"value={this.state.nome} onChange={this.updateNome}
          />
        </label>
        <label>
          Editar Email:
          <input type="text" class="editar" value={this.state.email} onChange={this.updateEmail}
          />
        </label>

        <label>
          Editar Telefone:
          <input type="text" class="editar" value={this.state.telefone} onChange={this.updateTelefone}
          />
        </label>

        <button class="btn btn-outline-info" onClick={this.update}>Atualizar</button>
      </div>
    )
  }
}

