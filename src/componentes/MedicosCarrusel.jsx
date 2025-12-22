import { useState, useEffect } from "react";
import "./MedicosCarrusel.css";

function MedicosCarrusel() {
  const medicos = [
    { img: "/img/medico1.webp", nombre: "Dra. Andrea Ríos", texto: "Médica veterinaria especialista en clínica de pequeños animales, egresada de la Universidad Nacional Mayor de San Marcos. Certificación en medicina interna veterinaria y manejo clínico de mascotas, con 10 años de experiencia brindando atención integral y cercana." },
    { img: "/img/medico2.jpg", nombre: "Dr. Carlos Mendoza", texto: "Médico veterinario especialista en cirugía veterinaria y diagnóstico clínico, egresado de la Universidad Nacional Federico Villarreal. Certificación en cirugía veterinaria y anestesiología, con más de 30 años de experiencia en el cuidado de la salud animal." },
    { img: "/img/medico3.jpg", nombre: "Dra. Valeria Torres", texto: "Médica veterinaria especialista en medicina preventiva y bienestar animal, egresada de la Universidad Científica del Sur. Certificación en vacunación, nutrición y cuidado preventivo, y posee 5 años de experiencia en atención clínica veterinaria." },
    { img: "/img/medico4.jpg", nombre: "Dr. Luis Pérez", texto: "Médico veterinario especialista en diagnóstico clínico, egresado de la Universidad Peruana Cayetano Heredia. Cuenta con certificación en diagnóstico por imágenes y laboratorio clínico, y posee 15 años de experiencia en atención veterinaria." },
    { img: "/img/medico5.jpg", nombre: "Dra. Ana Salas", texto: "Médica veterinaria especialista en nutrición animal, egresada de la Universidad Científica del Sur. Cuenta con certificación en nutrición y manejo alimenticio, y posee 8 años de experiencia brindando asesoría nutricional para mascotas." },
    { img: "/img/medico6.jpg", nombre: "Dr. Jorge Ruiz", texto: "Médico veterinario especialista en traumatología veterinaria, egresado de la Universidad Nacional San Cristóbal de Huamanga. Certificación en ortopedia veterinaria, y 20 años de experiencia en el tratamiento de lesiones y cirugías ortopédicas." },

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
  }, 1000); 

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
export default MedicosCarrusel;
  