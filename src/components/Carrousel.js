import "../assets/css/index.css";

// Carrousel Construido con Bootstrap

const Carrousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel__title">
        <h2 className="form__title">👓⚡ ¿Reconoces estas escenas? ⚡👓</h2>
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://i.postimg.cc/TPdzL0pK/wingardium-leviosa.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="slide__paragraph">Es Wingardium Leviosa, no Wingardium Leviosá</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/Bn0S4MGw/orden-del-fenix.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="slide__paragraph">Junto a la Orden del Fénix</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/8zxXsLnM/pocion-multijugos.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="slide__paragraph">Preparando poción multijugos</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/ZnrTdMkg/dobby.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="slide__paragraph">Dobby, el elfo libre</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/zBGhrcSj/quidditch.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="slide__paragraph">Concentrado en la Snitch dorada</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/QM0SX8HY/patronus.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="slide__paragraph">Encantamiento Patronus</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/V6LFVdWL/llegando-hogwarts.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="slide__paragraph">Llegando a Hogwarts</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://i.postimg.cc/1RkzWDJM/torneo-tres-magos.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <p className="slide__paragraph">Un nuevo participante en el torneo de los Tres Magos</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;
