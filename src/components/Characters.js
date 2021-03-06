import "../assets/css/characters.css";

const Characters = () => {
  return (
    <section className="characters">
      <div className="searcher__characters-container">
        <h1 className="searcher__title">&#x2728;¿A qué casa de Hogwarts pertenece?&#x2728;</h1>
        <div id="searchWrapper" className="searcher__characters">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            className="searcher__characters-bar"
            placeholder="Busca un personaje o casa"
          />
        </div>
        <br />
        <ul id="charactersList" className="searcher__characters-list"></ul>
      </div>
    </section>
  );
};

export default Characters;
