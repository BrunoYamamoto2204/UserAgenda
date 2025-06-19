import "./Contato.css"
import Botao from "./Botao"

const Contato = props => {
    return (
        <tr key={props.id} className="contato"> 
            <td>{props.id}</td>         
            <td>{props.nome}</td>
            <td>{props.telefone}</td>
            <td>{props.email} </td>
            <td>
                <Botao
                    className="botao"
                    label={props.labelButton}
                    click={() => props.onDelete(props.id)}
                />
            </td>
        </tr>
    )
}

export default Contato