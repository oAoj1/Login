import './Input.css'

export default function Input(props){
    return(
        <div className='inputContainer'> 
            <div className="iconInputContainer">
                <span>{props.iconInput}</span>
                <input 
                    type={props.type} 
                    onChange={user => props.setState(user.target.value)}
                    value={props.value}
                    placeholder={props.place}
                />
            </div> 
        </div>
        
    )
}