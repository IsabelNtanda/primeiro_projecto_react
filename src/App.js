import{ useState } from 'react';

function App() {
  const [aluno,setAluno] = useState('sujeito programador')
  
  function handleChangeName(nome){
  setAluno(nome);
  }
  return (
    <div>
      <h1>Componente App</h1><br/>
      <h2>Ola:{aluno}</h2>
      <button onClick={()=> handleChangeName('Lucas Oliveira')}>
        mudar Nome
      </button>
   
    </div>
  );
}
export default App;
