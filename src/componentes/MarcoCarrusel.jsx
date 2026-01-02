import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import "./MarcoCarrusel.css";

const imagenes = [
  "/img/baner.webp",
  "/img/marco2.jpg",
  "/img/marco4.jpg"
];

function MarcoCarrusel() {

  const [inicio, setInicio] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setInicio((prev) =>
        prev === imagenes.length - 1 ? 0 : prev + 1
      );
    }, 5000); 

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="marco">
      <img src={imagenes[inicio]} />
      <div className="presentacion">
        <h2>NOSOTROS</h2>
        <Link to="/contactanos" className="button">Reserva tu cita aquí</Link>
      </div>
    </div>
  );
}

export default MarcoCarrusel;

