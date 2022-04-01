import { Route, Routes } from "react-router-dom";
import "./assets/css/index.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./Pages/Home";

import News from "./Pages/News";
import Features from "./Pages/Features";

function App() {
  return (
    <>
    <div className="body">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </>
  );
}

export default App;
