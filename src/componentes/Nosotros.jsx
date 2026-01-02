import "./Nosotros.css"
import MedicosCarrusel from "./MedicosCarrusel";
import MarcoCarrusel from "./MarcoCarrusel";
import WhatsappFlotante from "./WhatsappFlotante";
import {Link} from "react-router-dom"

function Nosotros(){
    return(
        <div className="body">
            <MarcoCarrusel/>
            <div className="somos">
                <img src="/img/somos.jpg" alt="" />
                <div className="psomos">
                    <div className="p1somos">
                        <p>SOMOS</p>
                    </div>
                    <div>
                        <p className="descripcion-nosotros">Una institución dedicada al cuidado integral de la salud de las mascotas. Con un equipo de médicos veterinarios y profesionales especializados, comprometidos con brindar una atención responsable, ética y de calidad. Con más de 20 años de experiencia, trabajando por el bienestar y la salud de sus animales, guiados por principios que definen nuestra misión y visión.</p>
                    </div>
                </div>
            </div>
            <div className="equipo">
                <h1>EQUIPO DE TRABAJO</h1>
            </div> 
            <MedicosCarrusel />
            <div className="misionvision">
                <div className="mvision">
                    <div className="imgmvision">
                        <img className="vision-img" src="/img/mision.jpg" alt="" />
                        <h1>MISIÓN</h1>
                    </div>
                    <div className="p">
                        <img src="/img/iconmision.png" alt="" />
                        <p>Cuidar la salud y el bienestar de las mascotas mediante una atención veterinaria integral, responsable y de calidad, brindada por un equipo profesional comprometido y cercano, que trabaja con vocación y respeto, generando confianza y tranquilidad en cada familia.</p>
                    </div>
                </div>
                <div className="mvision">
                    <div className="p">
                        <img src="/img/iconvision.png" alt="" />
                        <p>Ser una clínica veterinaria reconocida en Lima por su atención profesional y humana, donde la experiencia, la mejora continua y el amor por los animales se reflejen en cada servicio, fortaleciendo el vínculo entre las mascotas y sus familias.</p>
                    </div>
                    <div className="imgmvision">
                         <img src="/img/vision.webp" alt="imagen" />
                         <h1>VISIÓN</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nosotros;