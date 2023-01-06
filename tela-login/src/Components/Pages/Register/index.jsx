import './Register.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Botao from "../../Botao";
import Input from "../../Input";
import { AiFillEye, AiFillEyeInvisible, AiOutlineUser, AiOutlineArrowLeft } from 'react-icons/ai'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

export default function Register(){

    const [nome, setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(<AiFillEyeInvisible/>)

    const exibirSenha = () => {
        if(type === 'password'){
            setType('text')
            setIcon(<AiFillEye/>)
        }else{
            setType('password')
            setIcon(<AiFillEyeInvisible/>)
        }
    }

    const enviarFormulario = (evento) => {
        evento.preventDefault()

    }

    return(
        <section>
            <form onSubmit={enviarFormulario}>
                <div className="inputsRegisterContainer">
                    <Bounce left>
                        <AiOutlineUser className='userLogo'/>
                    </Bounce>
                    
                    <Bounce right>
                        <h2>Informe seus dados</h2>
                    </Bounce>

                    <Fade left>
                        <div className="nomeEmailContainer">
                            <Input
                                type='text'
                                setState={nomeUser => setNome(nomeUser)}
                                value={nome}
                                place='Nome'
                            />

                            <Input
                                type='email'
                                setState={emailUser => setEmail(emailUser)}
                                value={email}
                                place='Email'
                            />
                        </div>
                    </Fade>
                    
                    <Fade right>
                        <div className="senhasContainer">
                            <Input
                                type={type}
                                setState={senhaUser => setSenha(senhaUser)}
                                value={senha}
                                place='Senha'
                            />

                            <Input
                                type={type}
                                setState={senhaUser => setConfirmarSenha(senhaUser)}
                                value={confirmarSenha}
                                place='Confirmar senha'
                            />

                        </div>
                    </Fade>
                    
                    <span 
                        onClick={exibirSenha}
                        className='revelarSenha'>
                        {icon}
                    </span>

                    <Bounce top>
                        <div className="botaoContainer">
                            <Botao>
                                Enviar
                            </Botao>
                        </div>
                    </Bounce>

                    <Fade left>
                        <Link to='/'>
                            <div className="voltarContainer">
                                <AiOutlineArrowLeft/>
                                <p>Voltar</p>
                            </div>
                        </Link>
                    </Fade>
                    
                </div>
                
            </form>
        </section>
        
    )
}