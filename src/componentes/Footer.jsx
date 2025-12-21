import React from "react"; 
import "./Footer.css";
 

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src="/img/logo.png" alt="SocialVet Logo" className="footer-logo" />
                </div>

                <div className="footer-section">
                    <h4>Contáctanos</h4>
                    <div className="contact-item">
                        <p><strong>SURQUILLO:</strong></p>
                        <p> (01) 3736987</p>
                        <p> +51 992 348 771</p>
                        <p> María Elena Moyano 120, Surquillo, Lima, Perú</p>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Horario de atención</h4>
                    <p>Lunes a sábados de 9 am a 6 pm</p>
                    <p className="emergency-highlight">Emergencias 24 horas </p>
                </div>

                <div className="footer-section">
                    <h4>Síguenos</h4>
                <div className="social-icons">
                    <img src="/img/FC.png" alt="Facebook" className="social-img"/>
                    <img src="/img/INST.png" alt="Instagram" className="social-img"/>
                    <img src="/img/WTT.png" alt="WhatsApp" className="social-img"/>
                </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 LARANAVET - VETERINARIOS ESPECIALISTAS - DERECHOS RESERVADOS</p>
            </div>
        </footer>
    );
}

export default Footer;