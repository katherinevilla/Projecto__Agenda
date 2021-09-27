import React from "react";
export default class RegistroContatos extends React.Component {
  constructor() {
    super();

    this.state = {
      nome: "",
      email: "",
      telefone: ""
    }

    this.handleChange = this.handleChange.bind(this)
    this.save = this.save.bind(this)
  }

    handleChange(event) {
    this.setState({ nome: event.target.value })
    this.setState({ email: event.target.value })
    this.setState({ telefone: event.target.value })
  }

  save() {
    const newContato = {
      nome: this.state.nome,
      email: this.state.email,
      telefone: this.state.telefone
      
    }

    fetch("http://localhost:3001/contatos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newContato)
    });

    this.setState({ nome: "" })
    this.setState({ email: "" })
    this.setState({ telefone: "" })
    this.props.registroContatoCallback()
  }

  render() {
    return (
      <div class= "titulo_1">
        <h3> Cadastro de contato </h3>
        <form>
          <div>
            <label> Id:
            <input type="text"value = {this.state.value} onChange = {this.handleChange}></input>
            </label>
          </div>
          <div>
            <label> Nome:
            <input type="text"value = {this.state.value}onChange = {this.handleChange}></input>
            </label>
          </div>
          <div>
            <label> Email: 
            <input type="text"value = {this.state.value}onChange = {this.handleChange}></input>
            </label>
          </div>
          <div>
            <label> Telefone: 
            <input type="text" value = {this.state.value} onChange = {this.handleChange}></input>
            </label>
          </div>
          </form>
          <div>
          <button class ="classe" onClick = {this.save}>Cadastrar</button>
          
          <button class= "classe" onClick = {this.save} >Buscar</button>
          </div>
          </div>
        
          
      
    )
  }
}
