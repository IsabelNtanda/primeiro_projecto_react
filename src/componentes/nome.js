
//posso tbm desestruturar metendo function App({aluno})  e usar simplesmente aluno em vez de props.aluno
function Nome({aluno,idade}){
return(
  <span>seja bem vindo:{aluno} - Idade: {idade} anos </span>
  )
}
export default Nome;