import { Link } from "react-router-dom"
export default function Home(){
return(
  <div>
    <h1>Bem vindo a pagina Home</h1>
    <span>Sujeito programador</span> <br /> <br />
    <Link to='/sobre'>Sobre</Link> <br /> <br />
    <Link to='/contato'>Contato</Link>
    <hr />
    <Link to='/produto/2345'>Acessar Produto 12345</Link>
  </div>
  )
}