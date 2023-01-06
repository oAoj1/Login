import './Botao.css'

export default function Botao(props){
    return(
        <button color={props.cor}>
            {props.children}
        </button>
    )
}