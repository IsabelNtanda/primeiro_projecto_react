import Nome from './components/Nome'
function App(){
return(
  <div>
    <h1>Componentes</h1>
    <Nome aluno='Isabel' idade={30}/>
    <br />
    <Nome aluno='Pereira' idade={25}/>
  </div>
  
  )

}
export default App;