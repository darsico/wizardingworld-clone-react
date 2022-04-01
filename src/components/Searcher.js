import "../assets/css/index.css";

const Searcher = () => {
  return (
    <section id="three" class="i-row i-row-odd searher-container">
      <h2 class="form__title">¿Qué quieres saber de tu casa favorita?</h2>
      <div class="icon-container">
        <i class="bi bi-search"></i>
      </div>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
        <button class="btn btn-outline-warning" type="submit">
          Buscar
        </button>
      </form>
    </section>
  );
};

export default Searcher;
