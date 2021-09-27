import React from "react";
import Agenda from "./Agenda";
import RegistroContatos from "./RegistroContatos";

export default class app extends React.Component {
  constructor() {
    super()

    this.state = {
      contatos: [],
      version: 0,
    };

    this.fetchContatos = this.fetchContatos.bind(this);
  }

  fetchContatos() {
    fetch("http://localhost:3001/contatos")
      .then (response => response.json())
      .then (contatos => this.setState({ contatos: contatos, version: this.state.version + 1 }))   
  }

  componentDidMount() {
    this.fetchContatos()
  }

  render() {
    return (
      <div class="classe">
        <RegistroContatos registroContatoCallback={this.fetchContato} />
        
        <Agenda contatos={this.state.contatos} fetchContatosCallback={this.fetchContatos}/>
      </div>
    );
  }

}
