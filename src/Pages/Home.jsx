import Blog from "../components/Blog";
import LastestNews from "../components/LastestNews";
import MagicalFeatures from "../components/MagicalFeatures";
import Hero from "../components/Hero";
import Searcher from "../components/Searcher";
import Carrousel from "../components/Carrousel";

import { LastestNewsData } from "../assets/data/LastestNewsData";

const Home = () => {
  return (
    <>
      <Hero />
      <Carrousel />
      <MagicalFeatures />
      <Searcher />
      <div className="blog">
        <Blog />
      </div>
      <LastestNews LastestNewsData={LastestNewsData} />
    </>
  );
};

export default Home;
