const MoreSection = ({ moreContentSection, heroSection }) => {
  const { displayTitle } = heroSection;
  const mainPageHref = `https://www.wizardingworld.com/${displayTitle.toLowerCase()}/`;
  return (
    <section className="more">
      <h2 class="more__title">More to explore</h2>
      <section className="more-posts-container">
        {moreContentSection.map((element) => {
          const { displayTitle, externalId, mainImage } = element.body;
          const { url } = mainImage.image.file;
          return (
            <a href={mainPageHref + externalId} target="_blank" key={externalId}>
              <article class="more-post">
                <figure class="more-post__image-container">
                  <img src={url} alt="" class="more-post__image" />
                </figure>
                <h3 class="more-post__title">{displayTitle}</h3>
                <p class="more-post__author">By The Wizarding World Team</p>
              </article>
            </a>
          );
        })}
      </section>
    </section>
  );
};

export default MoreSection;
