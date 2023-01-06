import './Tela.css'
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Botao from '../Botao'
import Input from '../Input'
import { AiFillEye, AiFillEyeInvisible, AiFillLock  } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'
import { FaReact } from 'react-icons/fa'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Tela(){
    
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [type, setType] = useState('password')
    const [icon, setIcon] = useState(<AiFillEyeInvisible/>)

    function enviarFormulario(evento){
        evento.preventDefault()


    }

    const exibirSenha = () => {
        if(type === 'password'){
            setIcon(<AiFillEye/>)
            setType('text')
        }else{
            setIcon(<AiFillEyeInvisible/>)
            setType('password')
        }
    }

    return(
        <header>
            <Fade top>
                <div className="loginContainer">
                    <div className="bannerContainer">
                        <Fade left>
                            <h1>React Login</h1>
                        </Fade>
                        <Fade right>
                            <FaReact/>
                        </Fade>  
                        
                    </div>

                    <div className="inputsContainer">
                        <form onSubmit={enviarFormulario}>
                            <div className="emailSenhaContainer">
                                <Fade left>
                                    <Input  
                                        setState={emailUser => setEmail(emailUser)}
                                        value={email}
                                        label='Email'
                                        type='email'
                                        iconInput={<MdEmail/>}
                                        place='Email'
                                    />
                                </Fade>

                                <Fade right>
                                    <div className="revelarSenhaContainer">
                                        <Input
                                            setState={senhaUser => setSenha(senhaUser)}
                                            value={senha}
                                            label='Senha'
                                            type={type}
                                            iconInput={<AiFillLock/>}
                                            place='Senha'
                                        />
                                        <span onClick={exibirSenha}>
                                            {icon}
                                        </span>
                                    </div>
                                </Fade>

                                <div className="botaoContainer">
                                    <Fade right>
                                        <Botao>
                                            Entrar
                                        </Botao>
                                    </Fade>
                                </div>

                                <div className="esqueciSenhaContainer">
                                    <Link to='/recuperarsenha'><span>Esqueci</span> minha senha</Link>
                                </div>
                            </div>
                            
                        </form>

                        <hr className='linha'/>

                        <div className="registerLinkContainer">
                            <Rotate bottom left>
                                <Link to='/registrar'>
                                    Clique para se <span>registrar</span>
                                </Link>
                            </Rotate>   
                        </div>
                    </div>

                </div>
            </Fade>
            
        </header>
    )
}