import { useParams } from "react-router-dom";
export default function Produto() {
  const {id} = useParams()
  return (
    <div>
      <h2>Pagina detalhe produto</h2>
      <span>Meu prodotu é {id}</span>
    </div>
  );
}
