import './EsqueciSenha.css'
import { Link } from 'react-router-dom';
import Input from "../../Input";
import Botao from "../../Botao";
import { useState } from 'react';
import { MdEmail } from 'react-icons/md'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { MdAttachEmail } from 'react-icons/md'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade'

export default function EsqueciSenha(){

    const [recuperarSenha, setRecuperarSenha] = useState('')

    function esqueciSenhaEnviar(evento){
        evento.preventDefault()

    }

    return(
        <section>
            <div className='esqueciContainer'>
                <form onSubmit={esqueciSenhaEnviar}>

                    <Bounce bottom>
                        <MdAttachEmail className='emailLogo'/>
                    </Bounce>

                    <Bounce top>
                        <div className="tituloRecuperarSenhaContainer">
                            <h2>Coloque seu E-mail</h2>
                            <span>Verifique se enviamos uma mensagem de recuperação da senha</span>
                        </div>
                    </Bounce>

                    <Fade left>
                        <Input
                            type='email'
                            setState={emailUser => setEmail(emailUser)}
                            value={recuperarSenha}
                            place='Email'
                            iconInput={<MdEmail/>}
                        />
                    </Fade>
                    
                    <Fade right>
                        <div className="botaoContainer">
                            <Botao>
                                Enviar
                            </Botao>
                        </div>
                    </Fade>
                    
                </form>

                <Link to='/'>
                    <div className="voltarContainer">
                        <AiOutlineArrowLeft/>
                        <p>Voltar</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}