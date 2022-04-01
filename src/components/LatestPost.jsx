import LatestPostMainPost from "./LatestPostMainPost";
import LatestSecondaryPosts from "./LatestSecondaryPosts";

const LatestPost = ({ latestPosts }) => {
  const secondaryPosts = latestPosts.filter((element, id) => {
    return id !== 0;
  });
  const lastestMainPost = latestPosts.filter((element, id) => {
    return id === 0;
  });
  return (
    <section className="latest" id="latest-posts">
      <section>
        {lastestMainPost.map((element) => {
          const { externalId, displayTitle, intro, mainImage } = element;
          const { url } = mainImage.image.file;
          return (
            <LatestPostMainPost
              key={element.externalId}
              externalId={externalId}
              displayTitle={displayTitle}
              intro={intro}
              mainImage={mainImage}
              url={url}
            />
          );
        })}
      </section>
      <section className="secondary-posts-container">
        {secondaryPosts.map((element) => {
          const { externalId, displayTitle, intro, mainImage } = element;
          const { url } = mainImage.image.file;
          return (
            <LatestSecondaryPosts
              key={element.externalId}
              externalId={externalId}
              displayTitle={displayTitle}
              intro={intro}
              mainImage={mainImage}
              url={url}
            />
          );
        })}
      </section>
    </section>
  );
};

export default LatestPost;
//
// <LatestPostMainPost
//   key={element.externalId}
//   externalId={externalId}
//   displayTitle={displayTitle}
//   intro={intro}
//   mainImage={mainImage}
//   url={url}
// />;

// if (i !== 0) {
//           return (
//             <LatestSecondaryPosts
//               key={element.externalId}
//               externalId={externalId}
//               displayTitle={displayTitle}
//               intro={intro}
//               mainImage={mainImage}
//               url={url}
//             />
//           );
//         }
