import "./Mensagem.css"

const Mensagem = props => {
    if (!props.texto) return 
    
    const classe = props.tipo === "sucesso" ? "mensagem-certo visivel" : "mensagem-erro visivel"
    return <p className={classe}>{props.texto}</p>
}

export default Mensagem