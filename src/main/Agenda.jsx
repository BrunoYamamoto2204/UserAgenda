import React, { Component } from "react"
import "./Agenda.css"
import Contato from "../Components/Contato"
import Mensagem from "../Components/Mensagem"
import Formulario from "./Formulario"
import Header from "../template/Header"

export default class Agenda extends Component {
    state = {
        listaContatos: [
            { id: 1, nome: "Jonson", telefone: "91234-5678", email: "jonson@gmail.com" },
            { id: 2, nome: "João", telefone: "91234-9999", email: "joao@gmail.com" },
            { id: 3, nome: "Jabilson", telefone: "91234-7777", email: "jabilson@gmail.com" },
            { id: 4, nome: "Fulano", telefone: "91234-5555", email: "fulano@gmail.com" },
        ],
        novoContato: {
            id: '',
            nome: '',
            telefone: '',
            email: ''
        },
        mensagemSucesso: "",
        mensagemErro: ""
    }

    delete = (id) => {
        const nomeUsuario = this.state.listaContatos.find(c => c.id === id).nome

        const confirmar = window.confirm(`Tem certeza que deseja excluir o contato ${nomeUsuario}`)
        if(!confirmar)return

        const listaAtualizada = this.state.listaContatos.filter(p => p.id !== id)
        this.setState({ 
            mensagemSucesso: `${nomeUsuario} excluido com sucesso!`,
            listaContatos: listaAtualizada,
        })

        clearTimeout(this.timerMensagemSucesso);

        this.timerMensagemSucesso = setTimeout(() => {
            this.setState({mensagemSucesso:""})
        }, 3000)
    }

    handleChange = (e, campo) => {
        const valor = e.target.value
        const novoContato = {...this.state.novoContato}
        novoContato[campo] = valor

        this.setState({novoContato})
        console.log(novoContato)
    }

    add = (e) => {
        e.preventDefault()
        
        // Validação de campos iguais
        let campoRepetido = ""
        const campoIgual = this.state.listaContatos.some(contato => {
            if (contato.nome === this.state.novoContato.nome){
                campoRepetido = "nome"
                return true
            }
            else if (contato.telefone === this.state.novoContato.telefone){
                campoRepetido = "telefone"
                return true
            }
            else if (contato.email === this.state.novoContato.email ){
                campoRepetido = "email"
                return true
            }

            return false
        })

        clearTimeout(this.timerMensagemErro);
        clearTimeout(this.timerMensagemSucesso)

        if(campoIgual){
            this.setState({ mensagemErro: `Este ${campoRepetido} já está cadastrado!`})
            this.timerMensagemErro =setTimeout(() => { this.setState({ mensagemErro: ""}) }, 3000)

            return
        }

        // Validação da listaContatos vazia
        let proximoId
        if (this.state.listaContatos.length === 0){
            proximoId = 1
        }
        else{
            proximoId = Number(this.state.listaContatos[this.state.listaContatos.length-1]["id"]) + 1
        }
        const novoContato = {...this.state.novoContato, id:proximoId}


        // Validação de campos vazios
        if( this.state.novoContato.nome.trim() === "" ||
            this.state.novoContato.telefone.trim() === "" ||
            this.state.novoContato.email.trim() === ""
        ) {
            this.setState({ mensagemErro: "Preencha todos os campos!"})
            setTimeout(() => { this.setState({ mensagemErro: ""})}, 3000)

            return
        }
        else{
            this.setState({
                listaContatos: [...this.state.listaContatos, novoContato],
                mensagemSucesso: `${this.state.novoContato.nome} adicionado com sucesso!`,
                novoContato: { nome: "", telefone: "", email: "" },
            })    
            
            this.timerMensagemSucesso = setTimeout(() => { this.setState({ mensagemSucesso:"" }) }, 3000)
        }
    }

    limparCampos = (e) => {
        e.preventDefault()

        this.setState({
            novoContato: { nome: "", telefone: "", email: "" }
        })
    }

    renderTable(contatos){
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {contatos}
                </tbody>
            </table>
        )
    }

    render(){
        let contatos
        let semContatos
        if (this.state.listaContatos.length === 0) {
            semContatos = <p>Sem contatos cadastrados</p>
        } 
        else {
            contatos = this.state.listaContatos.map(contato => (
                <Contato
                    key = {contato.id}
                    id = {contato.id}
                    nome = {contato.nome}
                    telefone = {contato.telefone}
                    email = {contato.email}
                    labelButton="Excluir"
                    onDelete={this.delete}
                /> 
            ))
        }

        return(
            <div className="agenda-contatos">
                <Header/>                
                <div className="agenda">
                    <div className="agenda-content">
                        
                        <h1>Agenda de Contatos</h1>
                        <Formulario adicionar={this.add} handleChange={this.handleChange} limparCampos={this.limparCampos}
                            novoContato={this.state.novoContato}/>
                    
                        <Mensagem tipo={"sucesso"} texto={this.state.mensagemSucesso}/>
                        <Mensagem tipo={"erro"} texto={this.state.mensagemErro}/>
                        
                        <hr className="divisaoSecao"/>

                        <h2><i className="fa-solid fa-user icon-user"></i> Contatos</h2>
                        <h3 className="quantidadeContatos">{this.state.listaContatos.length > 0 ?
                            `Total de contatos: ${this.state.listaContatos.length}` : ""}</h3>

                        <div className="lista-contatos">{this.renderTable(contatos)}</div>
                        <div className="semContatos">{semContatos}</div>
                    </div>
                </div>
            </div>
        )
    }
}