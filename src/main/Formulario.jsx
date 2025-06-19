import "./Formulario.css"

const Formulario = props => {
    return(
        <div className="novo-cadastro">
            <div className="form-content">
                <div className="titulo">
                    <h2>Novo Cadastro</h2>
                    <h3> Cadastro de novo usuário </h3>
                    <div><button onClick={e => props.adicionar(e)} className="addContato">Adicionar Contato</button></div>
                </div>
                
                <form className="formulario">
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
                        <button onClick={e => props.limparCampos(e)} className="limparCampos">Limpar Campos</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Formulario