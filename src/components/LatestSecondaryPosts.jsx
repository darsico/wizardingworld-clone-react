const LatestSecondaryPosts = (props) => {
  const { url, displayTitle, mainPageHref, externalId } = props;
  return (
    <>
      <a href={mainPageHref + externalId} target="_blank">
        <article className="secondary-post">
          <figure className="secondary-post__image-container">
            <img src={url} alt="" className="secondary-post__image" />
          </figure>
          <h3 className="secondary-post__title">{displayTitle}</h3>
          <p className="secondary-post__author">By The Wizarding World Team</p>
        </article>
      </a>
    </>
  );
};

export default LatestSecondaryPosts;
