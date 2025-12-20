import './App.css';
import Blog from './componentes/Blog';
import PreguntasFrecuentes from './componentes/PreguntasFrecuentes';
import Servicios from './componentes/Servicios';
import Inicio from './componentes/Inicio';
import Nosotros from './componentes/Nosotros';
import Header from './componentes/Header';
import Banner from './componentes/Banner';
import Footer from './componentes/Footer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<><Banner /><Inicio /></>} />
        <Route path="/servicios" element={<><Servicios /></>} />
        <Route path="/nosotros" element={<><Nosotros /></>} />
        <Route path="/blog" element={<><Blog /></>} />
        <Route path="/preguntas" element={<><PreguntasFrecuentes /></>} />
        <Route path="/contactanos" element={<><Inicio /></>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
