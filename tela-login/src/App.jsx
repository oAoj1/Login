import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './Components/Pages/Register'
import Tela from './Components/Tela'
import RecuperarSenha from './Components/Pages/EsqueciSenha'
import './index.css'

export default function App(){
  return(
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Tela/>}/>
          <Route path='/registrar' element={<Register/>}/>
          <Route path='/recuperarsenha' element={<RecuperarSenha/>}/>
        </Routes>
      </Router>
    </div>
  )
}