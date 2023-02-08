import { useState } from "react";

function App(){
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const[idade,setIdade] = useState('0')

  const[user,setUser] = useState({})

  function handleRegister(e){
    e.preventDefault()
    alert('usuario registrado com sucesso')
    setUser({
    nome:nome,
    email:email,
    idade:idade 
    })
  }
return(
  <div>
    <h1>Cadastrando usuario</h1>
    <form action="" onSubmit={handleRegister}>
      <label>Nome:</label>
      <input type="text" value={nome} onChange={(e)=>setNome(e.target.value)} />
      <br /><br />

      <label>Email:</label>
      <input type="email"   value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <br /><br />

      <label>Idade:</label>
      <input type="text" value={idade} onChange={(e)=>setIdade(e.target
        .value)} />
      <br /> <br />
      <button type="submit">Registrar</button>
    </form>
    <br /><br />
    <div>
      <span>Bem-vindo:{user.nome}</span><br />
      <span>Email:{user.email}</span> <br />
      <span>Idade:{user.idade}</span>
    </div>
  </div>
  
  
  )

}
export default App;