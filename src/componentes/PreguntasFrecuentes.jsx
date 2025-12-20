import PreguntaCard from "./PreguntaCard";
import "./PreguntasFrecuentes.css"
import { useState, useEffect } from "react";

function PreguntasFrecuentes() {
    const [index, setIndex] = useState(0);
    const banners = [
        "/img/cerca-de-veterinario-cuidando-mascota.jpg",
        "/img/preguntas-banner.jpg",
        "/img/cerca-de-veterinario-cuidando-perro (1).jpg",
        "/img/veterinario-haciendo-un-examen-de-rutina.jpg",
        "/img/cerca-de-veterinario-cuidando-perro (2).jpg"
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);


    return (
        <main>
            <div className="preguntas-presentacion-container">
                <img className="preguntas-banner" src={banners[index]} alt="" />
                <h1 className="preguntas-titulo">Preguntas Frecuentes</h1>
            </div>

            <div className="preguntas-contenido-container">
                <PreguntaCard titulo={"1. ¿Cada cuánto tiempo debo llevar a mi mascota al veterinario?"} descripcion={"Lo recomendable es al menos una vez al año para un chequeo general, incluso si aparenta estar sana. Estas visitas permiten detectar problemas de forma temprana, actualizar vacunas y asegurar que su desarrollo y estado de salud sean los adecuados. En cachorros, animales mayores o con enfermedades crónicas, los controles deben ser más frecuentes."} />
                <PreguntaCard titulo={"2. ¿Es realmente necesaria la vacunación si mi mascota no sale mucho de casa?"} descripcion={"Sí. Muchas enfermedades se transmiten por el aire, el contacto indirecto o incluso a través de las personas. La vacunación protege a tu mascota de patologías graves y potencialmente mortales, y además contribuye a la prevención de brotes que afectan a otros animales."} />
                <PreguntaCard titulo={"3. ¿Qué tipo de alimentación es la más adecuada para mi mascota?"} descripcion={"Una alimentación balanceada debe adaptarse a la edad, tamaño, nivel de actividad y estado de salud del animal. No todos los alimentos sirven para todas las mascotas. Un veterinario puede orientarte para evitar deficiencias nutricionales, obesidad o problemas digestivos a largo plazo."} />
                <PreguntaCard titulo={"4. ¿Por qué es importante la desparasitación si no veo parásitos?"} descripcion={"Muchos parásitos no son visibles a simple vista y pueden causar daños internos graves antes de mostrar síntomas. La desparasitación regular protege la salud de tu mascota y también reduce el riesgo de transmisión de parásitos a las personas que conviven con ella."} />
                <PreguntaCard titulo={"5. ¿La esterilización o castración cambia el comportamiento de mi mascota?"} descripcion={"Sí, generalmente de forma positiva. Estos procedimientos ayudan a reducir conductas agresivas, marcaje territorial y ansiedad, además de prevenir enfermedades graves y camadas no deseadas. No afectan la personalidad de tu mascota, sino que mejoran su calidad de vida."} />
                <PreguntaCard titulo={"6. ¿Cuáles son las señales de alerta que indican una emergencia veterinaria?"} descripcion={"Dificultad para respirar, vómitos persistentes, convulsiones, sangrado, pérdida de conciencia o cambios bruscos de comportamiento son señales claras de urgencia. Ante cualquiera de estos síntomas, acudir de inmediato al veterinario puede marcar la diferencia entre una recuperación rápida y un problema grave."} />
            </div>
        </main>
    );
}

export default PreguntasFrecuentes;