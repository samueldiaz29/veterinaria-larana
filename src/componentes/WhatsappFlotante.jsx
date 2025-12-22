import React from "react";
import "./WhatsappFlotante.css"

const WhatsappFlotante = () => {
    const abrirWhatsapp = () => {

window.open("https://wa.me/51926206454","_blank");
};

return (
    <div className="whatsapp-float"
    onClick={abrirWhatsapp}>
        <p>¿Necesitas ayuda?<br />¡Escríbenos!</p>
        <img src="./img/whatsapp.png"
        alt="Whatsapp"/>
        </div>
)
};
 export default WhatsappFlotante;