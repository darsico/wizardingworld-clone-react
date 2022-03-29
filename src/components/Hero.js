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
            ❤ Haz el Quizz y gana puntos para tu casa. Averigua la casa de los personajes del universo Harry Potter y
            Animales Fantásticos. Encuentra hechizos en nuestro generador de hechizos mágico ¡Buena suerte! ❤
          </p>
          <div className="hero__message-pages-container">
            <div className="hero__message-button-container">
              <a href="./quizzes/quizzes.html" className="hero__message-page-button hero__message-page-button--active">
                <button className="hero__message-button-animate">Quizz</button>
              </a>
            </div>
            <div className="hero__message-button-container">
              <a
                href="https://vcerpasalas.github.io/wizzardingworld-clone/apis/potter-characters-api/index.html"
                className="hero__message-page-button hero__message-page-button--active"
              >
                <button className="hero__message-button-animate">Personajes</button>
              </a>
            </div>
            <div className="hero__message-button-container">
              <a
                href="./apis/potter-hechizos-api/index.html"
                className="hero__message-page-button hero__message-page-button--active"
              >
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
