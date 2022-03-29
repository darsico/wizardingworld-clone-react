import "../assets/css/index.css";

const Splide = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel__title">
        <h2 class="form__title">¿Reconoces esta escena?</h2>
      </div>
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/5fF7dSYnafRR5nEjVQhATt/ea82c2aca1925942310dcb6633882eec/HP-F3-prisoner-of-azkaban-professor-sybill-trelawney-close-up-web-landscape?w=380&h=213&fit=fill&f=top&fm=webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="slide__title">First slide label</h5>
            <p class="slide__paragraph">Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/7GXo7mab9pPauATRz3qyuL/7760eadc44c1d84a161109a9df074636/HP-F2-chamber-of-secrets-hermione-writing-quill-thoughtful-web-landscape?w=380&h=213&fit=fill&f=top&fm=webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="slide__title">Second slide label</h5>
            <p class="slide__paragraph">Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/3rQ6V9h9D20qiQmM08iAKa/67dee554f5768c82862b4cfa0c18dd65/BartyCrouchJr_WB_F4_BartyCrouchJrStruggling_Still_080615_Land.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="slide__title">Third slide label</h5>
            <p class="slide__paragraph">Some representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/28qgIF2Fkj3A3Hmw1hI5py/6f90b371d1679d7b1a41ed718c9c9e6d/fb3-key-art-crop-web-landscape.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="slide__title">Fourth slide label</h5>
            <p class="slide__paragraph">Representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/28qgIF2Fkj3A3Hmw1hI5py/6f90b371d1679d7b1a41ed718c9c9e6d/fb3-key-art-crop-web-landscape.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="slide__title">Fourth slide label</h5>
            <p class="slide__paragraph">Representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/28qgIF2Fkj3A3Hmw1hI5py/6f90b371d1679d7b1a41ed718c9c9e6d/fb3-key-art-crop-web-landscape.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="slide__title">Fourth slide label</h5>
            <p class="slide__paragraph">Representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/28qgIF2Fkj3A3Hmw1hI5py/6f90b371d1679d7b1a41ed718c9c9e6d/fb3-key-art-crop-web-landscape.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="slide__title">Fourth slide label</h5>
            <p class="slide__paragraph">Representative placeholder content for the third slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            src="https://images.ctfassets.net/usf1vwtuqyxm/28qgIF2Fkj3A3Hmw1hI5py/6f90b371d1679d7b1a41ed718c9c9e6d/fb3-key-art-crop-web-landscape.jpg?w=380&h=213&fit=fill&f=top&fm=webp"
            class="d-block w-100"
            alt="..."
          />
          <div class="carousel-caption d-none d-md-block">
            <h5 class="slide__title">Fourth slide label</h5>
            <p class="slide__paragraph">Representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Splide;
