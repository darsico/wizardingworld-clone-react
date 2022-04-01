import LatestPostMainPost from "./LatestPostMainPost";
import LatestSecondaryPosts from "./LatestSecondaryPosts";

const LatestPost = ({ latestPosts }) => {
  console.log(latestPosts);
  return (
    <>
      {latestPosts.forEach((element, i) => {
        const { externalId, displayTitle, intro, mainImage } = element;
        const { url } = mainImage.image.file;
        if (i === 0) {
          <LatestPostMainPost
            key={element.externalId}
            externalId={externalId}
            displayTitle={displayTitle}
            intro={intro}
            mainImage={mainImage}
            url={url}
          />;
        } else {
          <LatestSecondaryPosts
            key={element.externalId}
            externalId={externalId}
            displayTitle={displayTitle}
            intro={intro}
            mainImage={mainImage}
            url={url}
          />;
        }
      })}
    </>
  );
};

export default LatestPost;
