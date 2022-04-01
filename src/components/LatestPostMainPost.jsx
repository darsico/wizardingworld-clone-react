const LatestPostMainPost = (props) => {
  const { url, displayTitle, intro } = props;
  return (
    <>
      <h2 className="latest__title">Latest & greatest</h2>
      <article className="latest-post">
        <figure className="latest-post__image-container">
          <img src={url} alt="" className="latest-post__image" />
        </figure>
        <div className="latest-post__details-container">
          <h4 className="latest-post__subtitle">FEATURE SPOTLIGHT</h4>
          <h3 className="latest-post__title">{displayTitle}</h3>
          <p className="latest-post__details">{intro}</p>
          <p className="latest-post__author">By The Wizarding World Team</p>
          <a className="latest-post__button" href target="_blank">
            Read Feature
          </a>
        </div>
      </article>
    </>
  );
};

export default LatestPostMainPost;
