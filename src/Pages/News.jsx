import axios from "axios";
import { useEffect, useState } from "react";
import LatestPost from "../components/LatestPost";

const News = () => {
  const [latestPosts, setLatestPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://raw.githubusercontent.com/vcerpasalas/wizzardingworld-clone/develop/json/news/newsData.json")
      .then((res) => {
        const contentData = res.data.pageProps.content;
        const latestContentData = contentData.referencedContent;
        setLatestPosts(latestContentData);
      })
      .catch((err) => {
        console.log(err);
      });

    // const latestContentData = contentData.referencedContent;
    // const moreContentData = data.pageProps.moreToExplore;
  }, []);

  return (
    <>
      <h1>news</h1>
      <LatestPost latestPosts={latestPosts} />
    </>
  );
};

export default News;
