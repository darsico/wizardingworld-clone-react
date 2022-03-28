import '../assets/css/estilos.css';

const LastestNews = ({LastestNewsData}) => {

    return (
        <section className="lastest-news">
            <div className="lastest-news__container">
                <h2 className="lastest-news__title">Lastest News</h2>

                <div className="lastest-news__news" id="lastestNewsNews">
                    <div className="lastest-news__new">
                        <figure className="lastest-news__image-container">
                            <img src={LastestNewsData[0].src} alt="imagen de las news" className="lastest-news__image" />
                        </figure>
                        <p className="lastest-news__link-paragraph">
                            <a href={LastestNewsData[0].href} className="lastest-news__paragraph">{LastestNewsData[0].paragraph}</a>
                        </p>
                    </div>

                    <div className="lastest-news__new">
                        <figure className="lastest-news__image-container">
                            <img src={LastestNewsData[1].src} alt="imagen de las news" className="lastest-news__image" />
                        </figure>
                        <p className="lastest-news__link-paragraph">
                            <a href={LastestNewsData[1].href} className="lastest-news__paragraph">{LastestNewsData[1].paragraph}</a>
                        </p>
                    </div>

                    <div className="lastest-news__new">
                        <figure className="lastest-news__image-container">
                            <img src={LastestNewsData[2].src} alt="imagen de las news" className="lastest-news__image" />
                        </figure>
                        <p className="lastest-news__link-paragraph">
                            <a href={LastestNewsData[2].href} className="lastest-news__paragraph">{LastestNewsData[2].paragraph}</a>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default LastestNews;