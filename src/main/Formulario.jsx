import "./Formulario.css"

const Formulario = props => {
    return(
        <form className="formulario">
            <h2>Novo Cadastro</h2>

            <div className="nome">
                <input type="text" name="nome" id="nome" placeholder="Nome" 
                    value={props.novoContato.nome} onChange={e => props.handleChange(e, "nome")}/>
            </div>
            <div className="telefone">
                <input type="text" name="telefone" id="telefone" placeholder="Telefone"
                    value={props.novoContato.telefone} onChange={e => props.handleChange(e, "telefone")}/>
            </div>
            <div className="email">
                <input type="text" name="email" id="email" placeholder="E-mail"
                    value={props.novoContato.email} onChange={e => props.handleChange(e, "email")}/>
            </div>

            <div className="botoes">
                <button onClick={e => props.adicionar(e)} className="addContato">Adicionar Contato</button>
                <button onClick={() => props.limparCampos()} className="limparCampos">Limpar Campos</button>
            </div>
        </form>
    )
}

export default Formulario