import "../assets/css/index.css";
import "../assets/css/hero.css";
import "../assets/css/hero2.css";

const Hero = () => {
  return (
    <article className="hero hero-responsive">
      <div className="hero-container hero-container--responsive">
        <div className="hero__message">
          <h2 className="hero__message-title">Wizarding World</h2>
          <h2 className="hero__message-subtitle">Juega nuestro nuevo concurso: Edición Animales Fantásticos</h2>
          <p className="hero__message-paragraph">
            ❤ Averigua la casa de los personajes del universo de Harry Potter y Animales Fantásticos. Descubre todos los
            hechizos en nuestro generador de hechizos mágico ¡Buena suerte! ❤
          </p>
          <div className="hero__message-pages-container">
            <div className="hero__message-button-container">
              <a href="" className="hero__message-page-button hero__message-page-button--active">
                <button className="hero__message-button-animate">Personajes</button>
              </a>
            </div>
            <div className="hero__message-button-container">
              <a href="" className="hero__message-page-button hero__message-page-button--active">
                <button className="hero__message-button-animate">Hechizos</button>
              </a>
            </div>
          </div>
        </div>
        <div className="hero__figure">
          <figure className="hero__figure-image-container">
            <img
              src={require("../assets/images/hero/hero.jpg")}
              alt="Imagen de portada"
              className="hero__figure-image"
            />
          </figure>
        </div>
      </div>
    </article>
  );
};

export default Hero;
