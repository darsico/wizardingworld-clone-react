import { Component } from "react";
import "../assets/css/characters.css";
// import "../assets/js/char_script.js"
import data from "../assets/json/characters.json"

class Characters extends Component {
  render() {
    const style = {
      color: "black"
    }

    return(
      <div className="characters">
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
          <ul id="charactersList" className="searcher__characters-list">
            {data.map((record, i) => 
              <li key={i} className="character">
                <h2 style={style}>{record.name}</h2>
                <p style={style}>Casa: {record.house}</p>
                <img src={record.image}></img>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  };
};

export default Characters;
