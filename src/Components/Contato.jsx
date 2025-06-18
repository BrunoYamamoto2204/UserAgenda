import "./Contato.css"
import Botao from "./Botao"

const Contato = props => {
    return (
        <div className="contato">
            <span>{props.nome}</span><hr/>
            <span>{props.telefone}</span><hr/>
            <span>{props.email} </span>
            <Botao 
                className="botao"
                label={props.labelButton} 
                click={() => props.onDelete(props.id)}
            />
        </div>
    )
}

export default Contato