import { Link } from "react-router-dom"
export default function Erro(){
return(
  <div>
    <h2>Oop parece que esta pagina nao exite</h2>
    <span>Encontramos essas paginas aqui:</span> <br />
    <Link to='/'>Home</Link> <br />
  </div>
  )
}