import { useEffect, useState } from "react";

function App(){
  const[input,setInput] = useState('')
  const [tarefas,setTarefas] = useState(['pagar a conta de luz','Estudar js'])
 
  useEffect(()=>{
  const tarefasStorage= localStorage.getItem('@tarefa')
  if (tarefasStorage) {
    setTarefas(JSON.parse(tarefasStorage))
  }
  },[])
useEffect(()=>{   
localStorage.setItem('@tarefa', JSON.stringify(tarefas))
  },[tarefas])
  
  function handleRegister(e){
    e.preventDefault()
   setTarefas([...tarefas, input])
   setInput('')
  }
return(
  <div>
    <h1>Cadastrando usuario</h1>
    <form action="" onSubmit={handleRegister}>
      <label>Nome da tarefa:</label>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <br /><br />

      <button type="submit">Registrar</button>
    </form>
    <ul>
     {tarefas.map( tarefa =>(
      <li key={tarefa}>{tarefa}</li>
      ))}
    </ul> 
  </div>
  
  
  )

}
export default App;