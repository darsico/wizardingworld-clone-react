import "../assets/css/index.css";

const Searcher = () => {
  return (
    <section id="three" className="i-row i-row-odd searher-container">
      <h2 className="form__title">¿Qué quieres saber de tu casa favorita?</h2>
      <div className="icon-container">
        <i className="bi bi-search"></i>
      </div>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
        <button className="btn btn-outline-warning" type="submit">
          Buscar
        </button>
      </form>
    </section>
  );
};

export default Searcher;
