import React from "react";
import "./Contactanos.css";

function Contactanos() {
    return (
        <main>
            <div className="contacto-container">
                <div className="contacto-banner-container">
                    <img className="contacto-banner-img" src="/img/contacto-banner.jpg" alt="Banner doctor y perrito"/>
                    <h1 className="contacto-banner-presentacion">Contactanos</h1>
                </div>
                <div className="contacto-cuerpo">
                    <div className="contacto-formulario-section">
                        <h2>Contacta nuestra Clínica Veterinaria</h2>
                        <p>Estamos aquí para ayudarte. <strong>Resuelve tus dudas</strong> o <strong>agenda una cita</strong> con nuestro equipo veterinario en Lima. ¡Tu mascota merece el mejor cuidado!</p>
                        
                        <form className="formulario">
                            <div className="fila-input">
                                <input type="text" placeholder="Nombre" required />
                                <input type="tel" placeholder="Teléfono" required />
                            </div>
                            <input type="email" placeholder="Correo Electrónico" required />
                            <textarea placeholder="Mensaje" rows="5"></textarea>
                            
                            <div className="checkbox-container">
                                <input type="checkbox" id="privacidad" required />
                                <label htmlFor="privacidad">HE LEÍDO Y ACEPTO LA <span className="link-text">POLÍTICA DE PRIVACIDAD</span></label>
                            </div>
                            
                            <button type="submit" className="enviar-btn">ENVIAR MENSAJE</button>
                        </form>
                    </div>
                    <div className="contacto-imagen-section">
                        <div className="contenedor-foto-perro">
                            <img src="/img/perro-gato-contacto.jpg" alt="Perro y Gato feliz" className="foto-perro-gato" />
                            <div className="cuadro-informativo">
                                <p>CUIDAMOS LO QUE MÁS QUIERES:</p>
                                <span>
                                    CONTACTE AHORA CON NOSTROS Y ASEGURA EL BIENESTAR DE TU MASCOTA CON 
                                    PROFESIONALES DE CALIDAD QUE PRIORIZAN SU SALUD Y FELICIDAD.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mapa-estatico-contenedor">
                    <img src="/img/mapa-captura.jpeg" alt="Ubicación en Google Maps" className="mapa-img" />
                </div>
            </div>
        </main>
    );
}

export default Contactanos;