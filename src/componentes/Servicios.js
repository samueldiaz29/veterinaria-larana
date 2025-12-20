import React, { useState } from "react";
import "./Servicios.css";

function Servicios() {
  const [activo, setActivo] = useState(null);

  const servicios = [
    {
      title: "HOSPITALIZACIÓN",
      text: "Contamos con una amplia sala de hospitalización perfectamente acondicionada para todo tipo de animales.",
      img: "/img/Hospitalizacion.jpg",
    },
    {
      title: "DIAGNÓSTICO POR IMAGEN",
      text: "Tecnología vanguardista para garantizar diagnósticos certeros mediante aparatología avanzada.",
      img: "/img/Diagnóstico.jpg",
    },
    {
      title: "REHABILITACIÓN Y FISIOTERAPIA",
      text: "En nuestro servicio de rehabilitación y fisioterapia tratamos patologías ortopédicas y neurológicas en perros, gatos y animales exóticos.",
      img: "/img/Rehabilitacion.jpg",
    },
    {
      title: "LABORATORIO",
      text: "Contamos con un laboratorio de análisis clínicos propio en el que realizamos la mayoría de las analíticas de una manera inmediata.",
      img: "/img/Laboratorio.jpg",
    },
    {
      title: "CONSULTAS MÉDICAS",
      text: "La Medicina Interna engloba el diagnóstico, tratamiento y seguimiento de enfermedades complejas, generalmente crónicas.",
      img: "/img/ConsultasMédicas.jpg",
    },
    {
      title: "CIRUGÍA",
      text: "Nuestro hospital cuenta con más de 30 años de experiencia en cirugía, siempre a la vanguardia de las últimas técnicas quirúrgicas.",
      img: "/img/Cirugia.jpg",
    },
     {
      title: "EMERGENCIA",
      text: "El servicio de emergencias veterinarias atiende de forma inmediata situaciones críticas, brindando atención rápida y especializada para proteger la salud y la vida de las mascotas.",
      img: "/img/Emergencia.jpg",
    },
     {
      title: "FARMACIA",
      text: "Disponemos de medicamentos y productos especializados para el cuidado, tratamiento y bienestar de tu mascota, con asesoría profesional y segura.",
      img: "/img/Farmacia.jpg",
    },
     {
      title: "BAÑO Y PELUQUERIA",
      text: "Servicio especializado para la higiene y estética de tu mascota, utilizando productos adecuados que cuidan su piel, pelaje y bienestar.",
      img: "/img/Baño.jpg",
    },
  ];

  const toggle = (i) => {
    setActivo((prev) => (prev === i ? null : i));
  };

  return (
    <section className="services">
      {servicios.map((s, i) => (
       <div className={`servicio ${activo === i ? "activo" : ""}`} key={i}>
          <img className="servicio-img" src={s.img} alt={s.title} />

          <h2 className="titulo">{s.title}</h2>

          <button className="btn-ver" type="button" onClick={() => toggle(i)}>
            {activo === i ? "CERRAR" : "VER MÁS"}
          </button>

          <div className={`overlay ${activo === i ? "open" : ""}`}>
            <p className="overlay-text">{s.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Servicios;