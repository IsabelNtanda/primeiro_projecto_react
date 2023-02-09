import { useState } from "react";
function App(){
  const[aluno,setAluno] = useState('sujeito programador')
  function handleChangeName(nome){
setAluno(nome)
  }
return(
  <div>
    <h1>Componentes App</h1>
    <h2>Ola:{aluno}</h2>
    <button onClick={() => handleChangeName('Isabel Pereira')}>Mudar nome</button>
  </div>
  
  )

}
export default App;
