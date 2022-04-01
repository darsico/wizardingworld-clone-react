import axios from "axios";
import { useEffect, useState } from "react";
import { HeroPages } from "../components/HeroPages";
import LatestPost from "../components/LatestPost";
import Loader from "../components/Loader";
import  MoreSection  from "../components/MoreSection";

const News = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  const [heroSection, setHeroSection] = useState([]);
  const [moreContentSection, setMoreContentSection] = useState([]);

const [render, setRender] = useState(false)
 const url = "https://raw.githubusercontent.com/vcerpasalas/wizzardingworld-clone/develop/json/news/newsData.json";
 useEffect(() => {
    const getMainPostsData = async () => {
      const result = await axios.get(url);
      const heroData = result.data.pageProps.content;
      const latestPostsData = result.data.pageProps.content.referencedContent;
        const moreContentData = result.data.pageProps.moreToExplore;
      setHeroSection(heroData);
      setLatestPosts(latestPostsData);
        setMoreContentSection(moreContentData);
      setRender(true);
    };
  
  getMainPostsData()
 }, []);
 


  return (
    <section className="news">
      {render ? (
        <>
          <HeroPages heroSection={heroSection} />
          <LatestPost latestPosts={latestPosts} />
          <MoreSection moreContentSection={moreContentSection} heroSection={heroSection} />
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};;

export default News;
