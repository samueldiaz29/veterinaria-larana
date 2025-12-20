import "./Blog.css";
import CardBlog from "./CardBlog.jsx";

function Blog() {
    return (
        <main>
            <div className="blog-container">
                <div className="blog-banner-container">
                    <img className="blog-banner-img" src="/img/blog-banner.jpg" alt="fondo" />
                    <h1 className="blog-banner-presentacion">Blog</h1>
                </div>
                <div className="blog-descripcion-container">
                    <p>
                        Larana es un espacio dedicado al cuidado integral de las mascotas, donde compartimos información confiable y consejos prácticos para ayudarte a mantener la salud y el bienestar de tus compañeros de vida. En nuestro blog encontrarás contenidos claros y útiles sobre prevención, alimentación, cuidados diarios y atención veterinaria responsable, pensados para acompañarte en cada etapa de su vida.
                    </p>
                </div>
                <div className="cards-container">
                    <CardBlog titulo={"Cuidados básicos para tu mascota"} urlImg={'/img/lavar-perro-mascota-en-casa.jpg'} descripcion={'Consejos prácticos para garantizar una buena calidad de vida en perros y gatos, incluyendo rutinas de ejercicio, descanso adecuado y atención diaria que ayudan a prevenir enfermedades comunes.'} />

                    <CardBlog titulo={"Vacunación y prevención"} urlImg={'/img/cerca-de-veterinario-cuidando-perro.jpg'} descripcion={'Explicación sobre la importancia de cumplir con el calendario de vacunación, cómo funciona la inmunización y de qué manera protege a tu mascota frente a virus y bacterias potencialmente mortales.'} />

                    <CardBlog titulo={"Alimentación saludable"} urlImg={'/img/alimentacion-saludable.jpg'} descripcion={'Información sobre cómo elegir el alimento adecuado según la edad, tamaño y condición de tu mascota, evitando deficiencias nutricionales y problemas digestivos a largo plazo.'} />

                    <CardBlog titulo={"Desparasitación interna y externa"} urlImg={'/img/desparitacion.jpg'} descripcion={'Detalles sobre los parásitos más comunes, sus riesgos para la salud y la importancia de mantener un plan regular de desparasitación para proteger tanto a la mascota como a la familia.'} />

                    <CardBlog titulo={"Señales de alerta en tu mascota"} urlImg={'/img/alerta-mascota.jpg'} descripcion={'Guía para identificar cambios de comportamiento, apetito o energía que pueden indicar problemas de salud y requieren una evaluación veterinaria oportuna.'} />

                    <CardBlog titulo={"Higiene y cuidado del pelaje"} urlImg={'/img/higiene-mascota.jpg'} descripcion={'Recomendaciones sobre la frecuencia del baño, el cepillado y el cuidado de la piel, ayudando a prevenir infecciones, alergias y caída excesiva del pelo.'} />

                    <CardBlog titulo={"Salud dental veterinaria"} urlImg={'/img/salud-dental.jpg'} descripcion={'Importancia del cuidado bucal para prevenir enfermedades periodontales, infecciones y dolor, así como su impacto en la salud general de tu mascota.'} />

                    <CardBlog titulo={"Esterilización y castración"} urlImg={'/img/esterilizacion.jpg'} descripcion={'Información sobre los beneficios médicos y conductuales de estos procedimientos, incluyendo la prevención de enfermedades y el control responsable de la población animal.'} />

                    <CardBlog titulo={"Primeros auxilios básicos"} urlImg={'/img/primeros-auxilios-basicos.jpg'} descripcion={'Orientación sobre cómo actuar ante heridas, golpes o emergencias comunes, y qué medidas tomar antes de llegar a una atención veterinaria profesional.'} />
                </div>
            </div>
        </main>
    );
}

export default Blog;