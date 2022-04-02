import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../assets/css/redirect.css";

import BookAnimation from "../components/BookAnimation.jsx";
import Loader from "../components/Loader";

const Redirect = () => {
  const [link, setLink] = useState("");
  const [pageName, setPageName] = useState("");
  const [isOfficial, setIsOfficial] = useState(false);
  const [render, isRender] = useState(false);

  let location = useLocation();
  useEffect(() => {
    isRender(false);
    checkLocation();
    isRender(true);
  }, [location]);

  const checkLocation = () => {
    if (location.pathname === "/books") {
      setLink("https://vcerpasalas.github.io/wizzardingworld-clone/apis/discover-books-api/index.html");
      setPageName("Books");
    } else if (location.pathname === "/films") {
      setLink("https://vcerpasalas.github.io/wizzardingworld-clone/apis/discover-films-api/index.html");
      setPageName("Films");
    } else if (location.pathname === "/portkey-games") {
      setLink("https://vcerpasalas.github.io/wizzardingworld-clone/apis/discover-games-api/index.html");
      setPageName("Porkey Games");
    } else if (location.pathname === "/on-stage") {
      setLink("https://vcerpasalas.github.io/wizzardingworld-clone/apis/discover-teatro-api/index.html");
      setPageName("On Stage");
    } else if (location.pathname === "/experiences") {
      setLink("https://vcerpasalas.github.io/wizzardingworld-clone/apis/discover-experiences-api/index.html");
      setPageName("Experiences");
    } else if (location.pathname === "/hechizos") {
      setLink("https://vcerpasalas.github.io/wizzardingworld-clone/apis/potter-hechizos-api/index.html");
      setPageName("Hechizos");
    } else if (location.pathname === "/quiz") {
      setLink("https://vcerpasalas.github.io/wizzardingworld-clone/activities/questions/quizzes/quizzes.html");
      setPageName("Quizzes");
    } else if (location.pathname === "/jk-rowling-archive") {
      setLink("https://www.wizardingworld.com/writing-by-jk-rowling");
      setPageName("J.K Rowling Archive");
      setIsOfficial(true);
    } else if (location.pathname === "/puzzles") {
      setLink("https://www.wizardingworld.com/collections/potter-puzzles");
      setPageName("Puzzles");
      setIsOfficial(true);
    } else if (location.pathname === "/sorting-hat") {
      setLink("https://my.wizardingworld.com/sorting-hat");
      setPageName("Hogwarts Sorting");
      setIsOfficial(true);
    } else if (location.pathname === "/secrets-of-dumbledore") {
      setLink("https://www.wizardingworld.com/collections/fantastic-beasts-the-secrets-of-dumbledore");
      setPageName("Secrets of dumbledore");
      setIsOfficial(true);
    } else if (location.pathname === "/shop") {
      setLink("https://www.wizardingworld.com/store?passthrough=true&store=hpshopuk");
      setPageName("Shop");
      setIsOfficial(true);
    } else if (location.pathname === "/login") {
      setLink("https://my.wizardingworld.com/login");
      setPageName("Login");
      setIsOfficial(true);
    }
  };

  return (
    <>
      {render ? (
        <section className={isOfficial ? "redirect" : "redirect redirect-prev"}>
          <div className="redirect-container">
            <BookAnimation />
            <h1 className="redirect__title">La página {pageName} aún se está escribiendo</h1>
            {isOfficial ? (
              <h2 className="redirect__subtitle">Sin embargo explora la pagina oficial</h2>
            ) : (
              <h2 className="redirect__subtitle">Sin embargo explora la pagina en nuestro proyecto anterior</h2>
            )}
            <div className="button-container">
              <NavLink className="btn-redirect button-home" to="/">
                Regresar a la página inicial
              </NavLink>
              {isOfficial ? (
                <a className="btn-redirect button-to-redirect" href={link} target="_blank">
                  Ir a pagina {pageName} oficial
                </a>
              ) : (
                <a className="btn-redirect button-to-redirect" href={link} target="_blank" rel="noreferrer">
                  Ir a {pageName} del anterior proyecto
                </a>
              )}
            </div>
          </div>
          {isOfficial ? null : (
            <iframe className="iframe-redirect" src={link} style={{ height: 500, width: 700 }} frameBorder="2"></iframe>
          )}
        </section>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Redirect;
