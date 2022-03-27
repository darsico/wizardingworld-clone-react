import React from "react";
import useSound from "use-sound";
import '../assets/css/index.css';
import '../assets/css/blog2.css';
import '../assets/js/main.js';
import backgroundAudio from '../assets/images/blog/blog-audio.jpg';
import backgroundBlog1 from '../assets/images/blog/blog-1.jpg';
import backgroundBlog2 from '../assets/images/blog/blog-2.jpg';
import backgroundBlog3 from '../assets/images/blog/blog-3.jpg';
import backgroundBlog4 from '../assets/images/blog/blog-4.jpg';
import mySound from '../assets/media/hpts.mp3';


const Blog = () => {
    const [playSound] = useSound(mySound)
    return (
        <div className="blog">
            <div className="blog-card">
                <div className="blog__image-container">
                    <div className="blog__image" style={{ backgroundImage: `url(${backgroundAudio})`,}}></div>
                </div>
                <div className="blog__description">
                    <h1 className="blog__title">Melodía oficial de Hogwarts</h1>
                    <h2 className="blog__subtitle">Revive una experiencia inolvidable</h2>
                    <p className="blog__paragraph">
                        Conocida por diversas generaciones de magos y brujas a través de los años. Puedes escuchar la conocida
                        melodía del universo de Harry Potter aquí. Disfruta de tu estadía en Wizzarding World.
                    </p>
                    <p className="blog__button">
                        <a className="audio__button-container">
                            <button type="button" className="audio__button" onclick={playSound()}>Escuchar ahora</button>
                        </a>
                    </p>
                </div>
            </div>

            <div className="blog-card alt">
                <div className="blog__image-container">
                    <div className="blog__image" style={{ backgroundImage: `url(${backgroundBlog1})`,}}></div>
                </div>
                <div className="blog__description">
                    <h1 className="blog__title">Colección especial</h1>
                    <h2 class="blog__subtitle">Más información sobre el libro Harry Potter y el legado maldito</h2>
                    <p class="blog__paragraph">
                        Visita nuestra nueva colección, donde podrás conocer más de la obra galardonada. Podrás sumergirte en este
                        nuevo universo a través de exclusivos videos, quizzes y demás funciones.
                    </p>
                    <p class="blog__button">
                    <a class="audio__button-container">
                        <button type="button" class="audio__button">Visita la colección</button>
                        </a>
                    </p>
                </div>
            </div>

            <div className="blog-card">
                <div className="blog__image-container">
                    <div className="blog__image" style={{ backgroundImage: `url(${backgroundBlog2})`,}}></div>
                </div>
                <div className="blog__description">
                    <h1 className="blog__title">Participa en nuestra ceremonia de varitas</h1>
                    <h2 className="blog__subtitle">Miles de variedades y modelos</h2>
                    <p className="blog__paragraph">
                        Encontrar una varita es un rito de iniciación de todos los magos y brujas jóvenes. Entonces, ¿qué estás
                        esperando? Descubre la tuya en la experiencia de varitas en linea, de Harry Potter Fan Club.
                    </p>
                    <p className="blog__button">
                        <a className="audio__button-container">
                            <button type="button" className="audio__button" onclick="#">Encuentra tu varita</button>
                        </a>
                        <audio id="audio"></audio>
                    </p>
                </div>
            </div>

            <div className="blog-card alt">
                <div className="blog__image-container">
                    <div className="blog__image" style={{ backgroundImage: `url(${backgroundBlog3})`,}}></div>
                </div>
                <div className="blog__description">
                    <h1 className="blog__title">Acércate a la magia, en cualquier momento y lugar</h1>
                    <h2 class="blog__subtitle">Tu momento ha llegado</h2>
                    <p class="blog__paragraph">
                        Únase al Club de fans de Harry Potter, participe en la Ceremonia de clasificación de casas de Hogwarts,
                        juegue en concursos y acertijos, y explore todos los rincones del mundo mágico con la aplicación oficial.
                    </p>
                    <p class="blog__button">
                    <a class="audio__button-container">
                        <button type="button" class="audio__button">Saber más</button>
                        </a>
                    </p>
                </div>
            </div>

            <div className="blog-card">
                <div className="blog__image-container">
                    <div className="blog__image" style={{ backgroundImage: `url(${backgroundBlog4})`,}}></div>
                </div>
                <div className="blog__description">
                    <h1 className="blog__title">Descubre en qué casa de Hogwarts estás</h1>
                    <h2 className="blog__subtitle">Ingresa al test de selección</h2>
                    <p className="blog__paragraph">
                        ¿Eres valiente, ambicioso, leal o sabio? ¿Crees estar seleccionado en la casa que esperas? Participa en la
                        Ceremonia de Selección Oficial para ver dónde te coloca el Sombrero Seleccionador.
                    </p>
                    <p className="blog__button">
                        <a className="audio__button-container">
                            <button type="button" className="audio__button" onclick="#">Descubrir mi casa</button>
                        </a>
                        <audio id="audio"></audio>
                    </p>
                </div>
            </div>
            
        </div>
    );
}

export default Blog;