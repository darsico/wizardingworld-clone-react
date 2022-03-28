import '../assets/css/estilos.css';

const MagicalFeatures = () => {
    return(
        <section className="magical-features">
            <div className="magical-features__container">
                <h2 className="magical-features__title">Magical features</h2>
                <div className="magical-features__features" id="magicalFeaturesFeatures">
                    
                    <div className="magical-features__features-first" id="magicalFeaturesFeaturesFirst">
                        <div className="magical-features__feature">
                            <figure className="magical-features__image-container">
                                <img src="https://images.ctfassets.net/usf1vwtuqyxm/7wO2s12BFbY8l1QMJPOyqQ/5355199bee35f1170f349ff66c2cac23/jude-law-dumbledore-fantastc-beasts-crimes-of-grindelwald.jpg?w=600&h=336&fit=fill&fm=webp&q=70" alt="imagen magical feature" className="magical-features__image" />
                            </figure>
                            <a href="https://www.wizardingworld.com/features/the-importance-of-dumbledores-many-armies" className="magical-features__link-text">
                                <p className="magical-features__text">The importance of Dumbledore’s many armies</p>
                            </a>
                        </div>
    
                        <div className="magical-features__feature">
                            <figure className="magical-features__image-container">
                                <img src="https://images.ctfassets.net/usf1vwtuqyxm/1i6smoGEfXtPp5C07LaUjq/07d5b990cef870a234381ef97fbea0ef/WB-goblet-of-fire-harry-ron-hermione-and-quills.jpg?w=600&h=336&fit=fill&fm=webp&q=70" alt="imagen magical feature" className="magical-features__image" />
                            </figure>
                            <a href="https://www.wizardingworld.com/features/wizarding-world-cryptic-crossword" className="magical-features__link-text">
                                <p className="magical-features__text">Play our Wizarding World cryptic crossword</p>
                            </a>
                        </div>

                    </div>
                    
                    <div className="magical-features__features-second" id="magicalFeaturesFeaturesSecond">
                        <div className="magical-features__feature">
                            <figure className="magical-features__image-container">
                                <img src="https://images.ctfassets.net/usf1vwtuqyxm/22tUM8mtX5MrVweDYYtE8X/6b6edf5c0d3796c5b7bacbb247e3fc7e/Howler_3.jpg?w=600&h=336&fit=fill&fm=webp&q=70" alt="imagen magical feature" className="magical-features__image" />
                            </figure>
                            <a href="https://www.wizardingworld.com/features/watch-our-video-tutorial-on-how-to-make-a-paper-craft-howler" className="magical-features__link-text">
                                <p className="magical-features__text">Watch our video tutorial on how to make a paper craft Howler</p>
                            </a>
                        </div>
    
                        <div className="magical-features__feature">
                            <figure className="magical-features__image-container">
                                <img src="https://images.ctfassets.net/usf1vwtuqyxm/5gsLEZsT5iFCtliSP88Uhi/9684cee57cbd12326174bf9b696cb2ca/telephone-box-harry.jpg?w=600&h=336&fit=fill&fm=webp&q=70" alt="imagen magical feature" className="magical-features__image" />
                            </figure>
                            <a href="https://www.wizardingworld.com/features/web-hidden-entrances-wizarding-world" className="magical-features__link-text">
                                <p className="magical-features__text">Hidden entrances of the wizarding world</p>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default MagicalFeatures;