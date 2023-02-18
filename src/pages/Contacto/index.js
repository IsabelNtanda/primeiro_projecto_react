import { Link } from "react-router-dom"
export default function Contato(){
return(
  <div>
  <h1>Pagina Contato</h1>
  <span>Contacto da empresa (add)</span> <br /> <br />
  <Link to='/'>Home</Link> <br /> <br />
  <Link to='/contato'>Sobre</Link>
</div>
  )
}