import "./Botao.css"

const Botao = props => {
    return (
        <button className="botao" onClick={props.click}>
            {props.label}
        </button>
    )
}

export default Botao