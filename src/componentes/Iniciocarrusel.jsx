import { useState, useEffect } from "react";
import "./MedicosCarrusel.css";

function Iniciocarrusel() {
  const medicos = [
    { img: "/img/Baño.jpg", nombre: "Baño y Peluquería"},
    { img: "/img/Cirugia.jpg", nombre: "Cirugía"},
    { img: "/img/ConsultasMédicas.jpg", nombre: "Consultas Médicas"},
    { img: "/img/Diagnóstico.jpg", nombre: "Diagnóstico por imagen"},
    { img: "/img/Emergencia.jpg", nombre: "Emergencia"},
    { img: "/img/Farmacia.jpg", nombre: "Farmacia"},
    { img: "/img/Hospitalizacion.jpg", nombre: "Hospitalización"},
    { img: "/img/Rehabilitacion.jpg", nombre: "Rehabilitación y Fisioterapia"},
    { img: "/img/Laboratorio.jpg", nombre: "Laboratorio"},

  ];

  const [inicio, setInicio] = useState(0);

  const siguiente = () => {
    if (inicio < medicos.length - 3) {
      setInicio(inicio + 1);
    }
  };

  const anterior = () => {
  if (inicio > 0) {
    setInicio(inicio - 1);
  }
};

useEffect(() => {
  const intervalo = setInterval(() => {
    setInicio((prevInicio) => {
      if (prevInicio < medicos.length - 3) {
        return prevInicio + 1;
      } else {
        return 0; 
      }
    });
  }, 15000); 

  return () => clearInterval(intervalo);
}, []);

return (
    <div className="slider-container">
      <button onClick={anterior} className="flecha">❮</button>

      <div className="slider">
        {medicos.slice(inicio, inicio + 3).map((medico, index) => (
          <div className="medico" key={index}>
            <img src={medico.img} alt="" />
            <div className="tarjeta">
              <strong className="nombre-medico">{medico.nombre}</strong><br />
              <p className="pmedico">{medico.texto}</p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={siguiente} className="flecha">❯</button>
    </div>
  );
}
export default Iniciocarrusel;