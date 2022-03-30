import "../assets/css/characters.css";

const Characters = () => {
  return (
    <section class="characters">
      <div class="searcher__characters-container">
        <h1 class="searcher__title">&#x2728;¿A qué casa de Hogwarts pertenece?&#x2728;</h1>
        <div id="searchWrapper" class="searcher__characters">
          <input
            type="text"
            name="searchBar"
            id="searchBar"
            class="searcher__characters-bar"
            placeholder="Busca un personaje o casa"
          />
        </div>
        <br />
        <ul id="charactersList" class="searcher__characters-list"></ul>
      </div>
    </section>
  );
};

export default Characters;
