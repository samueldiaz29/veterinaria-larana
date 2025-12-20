import "./PreguntaCard.css";
import { useState } from "react";

function PreguntaCard({titulo, descripcion}) {
    const [mostrarPregunta, setMostrarPregunta] = useState(false);
    const icono = mostrarPregunta ? '▲' : '▼';
    return(
        <div className="pregunta-card-container">
            <div className="pregunta-card">
                {titulo}
                <button className="btn-pregunta-card" onClick={()=> setMostrarPregunta(prev => !prev)}>{icono}</button>
            </div>
            { mostrarPregunta && (
                <div className="respuesta">{descripcion}</div>
            )}
        </div>
    );
}

export default PreguntaCard;