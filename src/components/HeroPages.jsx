export const HeroPages = ({ heroSection }) => {
  const { displayTitle, shortDescription, mainImage } = heroSection;
  const { url } = mainImage.image.file;

  return (
    <div div className="page-hero">
      <figure class="page-hero__image-container">
        <img class="page-hero-image" src={url} alt="" />
      </figure>
      <div class="page-hero-container-details">
        <h1 class="page-hero__title">{displayTitle}</h1>
        <p class="page-hero__description">{shortDescription}</p>
        {/* todo: add lottie player */}
        {/*  <lottie-player
          id="scroll-indicator-el"
          class="page-hero__scroll-indicator"
          src="./images/animated-scroll-indicator.json"
          speed="0.5"
          style="width:50px; height:50px"
          loop
          autoplay
        ></lottie-player> */}
      </div>
    </div>
  );
};
