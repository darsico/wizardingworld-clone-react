const LatestPostMainPost = (props) => {
  const { url, displayTitle, intro } = props;
  return (
    <>
      <h2 class="latest__title">Latest & greatest</h2>
      <article class="latest-post">
        <figure class="latest-post__image-container">
          <img src={url} alt="" class="latest-post__image" />
        </figure>
        <div class="latest-post__details-container">
          <h4 class="latest-post__subtitle">FEATURE SPOTLIGHT</h4>
          <h3 class="latest-post__title">{displayTitle}</h3>
          <p class="latest-post__details">{intro}</p>
          <p class="latest-post__author">By The Wizarding World Team</p>
          <a class="latest-post__button" href target="_blank">
            Read Feature
          </a>
        </div>
      </article>
    </>
  );
};

export default LatestPostMainPost;
