import "./Inicio.css";
import { useState, useEffect } from "react";
function Inicio(){
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

    return(
        <div className="body">
            <div className="historia">
                    <h1>
                        NUESTRA HISTORIA
                    </h1>
                <div className="contenhistoria">
                    <p>
                        Veterinaria Larana nace de la idea de profesionales veterinarios apasionados y comprometidos con la salud y la calidad de vida de nuestras mascotas, fue fundada hace más de 20 años, en la ciudad de Lima, es por ello que, contamos con la experiencia y el recorrido profesional para encargarnos de todos las consultas, revisiones y tratamientos, priorizando la rapidez y la seguridad de nuestros profesionales en las intervenciones para tu mascota, trabajando con las mejores marcas en el mundo de las mascotas.
                    </p>
                    <img src="/img/vet1.jpg" alt="" />
                </div>                
            </div>

            <div className="servicios">
                <h1>
                    SERVICIOS
                </h1>
            </div>
            
            <div className="reseniaclientes">
                <h1>
                    RESEÑAS DE NUESTROS CLIENTES
                </h1>
                <div className="per1">
                    <img src="/img/per1.jpg" alt=""/>
                        <p2>
                            "¡La mejor veterinaria de la zona! Desde que entras se nota el amor y la dedicación que tienen por los animales. Trataron a mi perrito con una paciencia increíble y me explicaron todo el proceso de su tratamiento con mucha claridad. Me fui con la tranquilidad de saber que mi mejor amigo está en las mejores manos. ¡100% recomendados!"
                        </p2>
                </div>
                        <p className="nomper1">Pablo Sanchez</p>
                <div className="per2">
                    <img src="/img/per2.jpg" alt=""/>
                        <p2>
                            "Excelente nivel de profesionalismo. Llevé a mi gata para una cirugía y el equipo médico fue impecable. Las instalaciones están muy limpias, bien equipadas y el seguimiento postoperatorio fue constante. Valoro mucho la honestidad y la transparencia con la que manejan los presupuestos y diagnósticos. Sin duda, mi clínica de confianza a partir de ahora."
                        </p2>
                </div>
                        <p className="nomper2">Emilio Gonzales</p>
            </div>

        </div>
    )
}
export default Inicio;