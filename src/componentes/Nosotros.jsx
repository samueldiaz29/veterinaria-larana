import "./Nosotros.css"
import MedicosCarrucel from "./MedicosCarrucel";

function Nosotros(){
    return(
        <div className="body">
            <div className="marco">
                <img src="/img/baner.webp" alt="" />
                <div className="presentacion">
                <h2>NOSOTROS</h2>
                <p> La Clínica Veterinaria Larana es una institución dedicada al cuidado integral de la salud de las mascotas, ubicada en Lima. Somos un equipo de médicos veterinarios y profesionales especializados, comprometidos con brindar una atención responsable, ética y de calidad. Con más de 20 años de experiencia, trabajamos con vocación y conocimiento para acompañar a las familias en el bienestar y la salud de sus animales, guiados por principios que definen nuestra misión y visión.</p>
                </div>
            </div >
            <div className="equipo">
                <h1>NUESTRO EQUIPO DE TRABAJO</h1>
                <p>Contamos con un equipo humano altamente capacitado, en constante actualización, que combina experiencia profesional y amor por los animales. <br /> Nuestro personal trabaja de manera cercana y responsable, priorizando siempre el bienestar de cada mascota y la confianza de sus dueños.</p>
            </div> 
            <MedicosCarrucel />

            <div className="misionvision">
                <div className="mvision">
                    <div className="imgmvision">
                        <img src="/img/mision.jpg" alt="" />
                        <h1>MISIÓN</h1>
                    </div>
                    <p>Cuidar la salud y el bienestar de las mascotas mediante una atención veterinaria integral, responsable y de calidad, brindada por un equipo profesional comprometido y cercano, que trabaja con vocación y respeto, generando confianza y tranquilidad en cada familia.</p>
                </div>
                <div className="mvision">
                    <p>Ser una clínica veterinaria reconocida en Lima por su atención profesional y humana, donde la experiencia, la mejora continua y el amor por los animales se reflejen en cada servicio, fortaleciendo el vínculo entre las mascotas y sus familias.</p>
                    <div className="imgmvision">
                         <img src="/img/vision.webp" alt="" />
                    <h1>VISIÓN</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Nosotros;