
//posso tbm desestruturar metendo function App({aluno})  e usar simplesmente aluno em vez de props.aluno
function Nome({aluno,idade}){
  return(
    <span>Bem-vindo: {aluno} - idade: {idade}</span>
    );
  
  }
export default Nome;