import { Link } from "react-router-dom"
export default function Erro(){
return(
  <div>
    <h2>Oop parece que esta pagina nao exite</h2>
    <span>Encontramos essas paginas aqui:</span> <br />
    <Link to='/'>Home</Link> <br />
    <Link to='/sobre'>Sobre</Link> <br />
    <Link to='/contato'>Contato</Link>
  </div>
  )
}