import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";
import "./assets/css/page.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";

import News from "./Pages/News";
import Features from "./Pages/Features";
import Characters from "./Pages/Characters";
import Redirect from "./Pages/Redirect";

function App() {
  return (
    <>
      <div className="body">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/features" element={<Features />} />
            <Route path="/news" element={<News />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/books" element={<Redirect />} />
            <Route path="/films" element={<Redirect />} />
            <Route path="/portkey-games" element={<Redirect />} />
            <Route path="/on-stage" element={<Redirect />} />
            <Route path="/experiences" element={<Redirect />} />
            <Route path="/hechizos" element={<Redirect />} />
            <Route path="/quiz" element={<Redirect />} />
            <Route path="/jk-rowling-archive" element={<Redirect />} />
            <Route path="/puzzles" element={<Redirect />} />
            <Route path="/sorting-hat" element={<Redirect />} />
            <Route path="/secrets-of-dumbledore" element={<Redirect />} />
            <Route path="/shop" element={<Redirect />} />
            <Route path="/login" element={<Redirect />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
