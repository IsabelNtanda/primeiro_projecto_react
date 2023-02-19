import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contato from "./pages/Contacto";
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Produto from "./pages/produto";
import Erro from "./pages/erro";
import Header from "./components/header";

//configuração de router

export default function RoutesApp(){

  return(
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />}  />
      <Route path="/contato" element={<Contato />} />
      <Route path="/produto/:id" element={<Produto />} />
      <Route path="*" element={<Erro/>} />
    </Routes>
    </BrowserRouter>
    
    )

}

