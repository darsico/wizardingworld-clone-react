const LatestSecondaryPosts = (props) => {
  const { url, displayTitle, mainPageHref, externalId } = props;
  return (
    <>
      <a href={mainPageHref + externalId} target="_blank">
        <article class="secondary-post">
          <figure class="secondary-post__image-container">
            <img src={url} alt="" class="secondary-post__image" />
          </figure>
          <h3 class="secondary-post__title">{displayTitle}</h3>
          <p class="secondary-post__author">By The Wizarding World Team</p>
        </article>
      </a>
    </>
  );
};

export default LatestSecondaryPosts;
