import "./CardBlog.css";

function CardBlog({titulo, urlImg, descripcion}) {
    return(
        <div className="card-blog-container">
            <h2 className="titulo-card-blog">{titulo}</h2>
            <img className="img-card-blog" src={urlImg} />
            <p className="descripcion-card-blog">{descripcion}</p>
        </div>
    );
}

export default CardBlog;