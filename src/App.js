import "./assets/css/index.css";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import LastestNews from "./components/LastestNews";
import MagicalFeatures from "./components/MagicalFeatures";
import Hero from "./components/Hero";
import Searcher from "./components/Searcher";
import Splide from "./components/Splide";

const LastestNewsData = [
  {
    src: "https://images.ctfassets.net/usf1vwtuqyxm/5Ni4xK7vdm4P3GmLIJOwzw/a64887996895e2375b1cd75474db12ad/5016-hpcc-220224.jpg?w=381&h=213&fit=fill&f=top&fm=webp",
    href: "https://www.wizardingworld.com/news/cursed-child-san-francisco-premiere-recap",
    paragraph: "Cursed Child officially opens in San Francisco after stunning premiere",
  },
  {
    src: "https://images.ctfassets.net/usf1vwtuqyxm/6OMzBtBcnJ3tmXCorqEXGA/74a0a9e025c61133d0e24ec1d21eb34d/HP5-order-of-the-phoenix-grimmauld-place-twelve-hidden-web-landscape?w=381&h=213&fit=fill&f=top&fm=webp",
    href: "https://www.wizardingworld.com/news/exclusive-first-look-at-the-illustrated-order-of-the-phoenix",
    paragraph:
      "An exclusive first look at images from the illustrated edition of Harry Potter and the Order of the Phoenix",
  },
  {
    src: "https://images.ctfassets.net/usf1vwtuqyxm/1Zyq5XTfpSu0t7d9LAIEh2/c86b5962861f5ed1909819bbfd7e3bd4/HPMA-crop.jpg?w=381&h=213&fit=fill&f=top&fm=webp",
    href: "https://www.wizardingworld.com/news/harry-potter-magic-awakened-to-rollout-worldwide",
    paragraph: "Harry Potter: Magic Awakened prepares for worldwide launch in 2022",
  },
];

function App() {
  return (
    <div className="body">
      <div className="hero-component">
        <Hero />
      </div>

      <Splide />

      <LastestNews LastestNewsData={LastestNewsData} />

      <MagicalFeatures />

      <div className="searcher">
        <Searcher />
      </div>

      <div className="blog">
        <Blog />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
