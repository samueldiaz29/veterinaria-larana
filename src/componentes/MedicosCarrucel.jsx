import { useState } from "react";
import "./MedicosCarrucel.css";

function MedicosCarrucel() {
  const medicos = [
    { img: "/img/medico1.webp", nombre: "Dra. Andrea Ríos", texto: "Médica veterinaria especialista en clínica de pequeños animales, egresada de la Universidad Nacional Mayor de San Marcos. Cuenta con certificación en medicina interna veterinaria y manejo clínico de mascotas, y posee 10 años de experiencia brindando atención integral y cercana." },
    { img: "/img/medico2.jpg", nombre: "Dr. Carlos Mendoza", texto: "Médico veterinario especialista en cirugía veterinaria y diagnóstico clínico, egresado de la Universidad Nacional Federico Villarreal. Cuenta con certificación en cirugía veterinaria avanzada y anestesiología, y posee más de 30 años de experiencia dedicados al cuidado de la salud animal." },
    { img: "/img/medico3.jpg", nombre: "Dra. Valeria Torres", texto: "Médica veterinaria especialista en medicina preventiva y bienestar animal, egresada de la Universidad Científica del Sur. Cuenta con certificación en vacunación, nutrición y cuidado preventivo, y posee 5 años de experiencia en atención clínica veterinaria." },
    { img: "/img/medico4.jpg", nombre: "Dr. Luis Pérez", texto: "Médico veterinario especialista en diagnóstico clínico, egresado de la Universidad Peruana Cayetano Heredia. Cuenta con certificación en diagnóstico por imágenes y laboratorio clínico, y posee 15 años de experiencia en atención veterinaria." },
    { img: "/img/medico5.jpg", nombre: "Dra. Ana Salas", texto: "Médica veterinaria especialista en nutrición animal, egresada de la Universidad Científica del Sur. Cuenta con certificación en nutrición y manejo alimenticio, y posee 8 años de experiencia brindando asesoría nutricional para mascotas." },
    { img: "/img/medico6.jpg", nombre: "Dr. Jorge Ruiz", texto: "Médico veterinario especialista en traumatología y ortopedia veterinaria, egresado de la Universidad Nacional San Cristóbal de Huamanga. Cuenta con certificación en ortopedia veterinaria, y posee 20 años de experiencia en el tratamiento de lesiones y cirugías ortopédicas." },

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


return (
    <div className="slider-container">
      <button onClick={anterior} className="flecha">❮</button>

      <div className="slider">
        {medicos.slice(inicio, inicio + 3).map((medico, index) => (
          <div className="medico" key={index}>
            <img src={medico.img} alt="" />
            <p>
              <strong>{medico.nombre}</strong><br /><br />
              {medico.texto}
            </p>
          </div>
        ))}
      </div>

      <button onClick={siguiente} className="flecha">❯</button>
    </div>
  );
}


export default MedicosCarrucel;
  