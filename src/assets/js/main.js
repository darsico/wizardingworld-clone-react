/*const pagesHero = document.getElementById("page-hero");
const latestPosts = document.getElementById("latest-posts");
const morePostsContainer = document.getElementById("more-posts-container");

const renderHeroHtml = ({ displayTitle, shortDescription, mainImage }, heroPageSection) => {
  const { url } = mainImage.image.file;
  return (heroPageSection.innerHTML += `
     <figure className="page-hero__image-container">
      <img className="page-hero-image" src="${url}" alt="">
    </figure>
    <div className="page-hero-container-details">
      <h1 className="page-hero__title">${displayTitle}</h1>
      <p className="page-hero__description">${shortDescription}</p>
       <lottie-player id="scroll-indicator-el" className="page-hero__scroll-indicator" src="./images/animated-scroll-indicator.json" speed="0.5" style="width:50px; height:50px"  loop autoplay></lottie-player>
    </div> 
    `);
};

const renderLatestPostsHtml = ({ displayTitle }, latestData, latestPostsSection) => {
  const secondaryPostsContainer = document.createElement("section");
  secondaryPostsContainer.classList.add("secondary-posts-container");

  const mainPageHref = `https://www.wizardingworld.com/${displayTitle.toLowerCase()}/`;

  latestData.forEach((element, i) => {
    const { externalId, displayTitle, intro, mainImage } = element;
    const { url } = mainImage.image.file;
    if (i === 0) {
      latestPostsSection.innerHTML += `      
      <h2 className="latest__title">Latest & greatest</h2>
    <article className="latest-post">
      <figure className="latest-post__image-container"><img src="${url}" alt="" className="latest-post__image"></figure>
      <div className="latest-post__details-container"><h4 className="latest-post__subtitle">FEATURE SPOTLIGHT</h4> 
        <h3 className="latest-post__title">${displayTitle}</h3> 
        <p className="latest-post__details">${intro}</p> 
        <p className="latest-post__author">By The Wizarding World Team</p> 
        <a className="latest-post__button" href="${mainPageHref + externalId}" target="_blank" >Read Feature</a>
      </div>
    </article>  
     `;
    } else {
      secondaryPostsContainer.innerHTML += `
        <a  href="${mainPageHref + externalId}" target="_blank">
      <article className="secondary-post">
   
        <figure className="secondary-post__image-container"><img src="${url}" alt="" className="secondary-post__image"></figure>
        <h3 className="secondary-post__title">${displayTitle}</h3>
         <p className="secondary-post__author">By The Wizarding World Team</p>
         </article>
         </a>

`;
    }
    latestPostsSection.append(secondaryPostsContainer);
  });
};

const renderMoreSectionHtml = ({ displayTitle }, moreSectionData, pageSection) => {
  const mainPageHref = `https://www.wizardingworld.com/${displayTitle.toLowerCase()}/`;
  moreSectionData.forEach((element) => {
    const { displayTitle, externalId, mainImage } = element.body;
    const { url } = mainImage.image.file;
    pageSection.innerHTML += `
      <a href=${mainPageHref + externalId} target="_blank">
       <article className="more-post">
          <figure className="more-post__image-container"><img src="${url}" alt="" className="more-post__image"></figure >
          <h3 className="more-post__title">${displayTitle}</h3>
           <p className="more-post__author">By The Wizarding World Team</p>
        </article>
        </a>
      `;
  });
};

const bodyEl = document.querySelector(".body");
const isNews = bodyEl.classList.contains("news");
const isFeatures = bodyEl.classList.contains("features");

if (isNews || isFeatures) {
  bodyEl.classList.add("clear-theme");
}*/

/*const getPagesData = async () => {
  if (isNews || isFeatures) {
    try {
      let response;
      if (isNews) {
        response = await axios.get(
          "https://raw.githubusercontent.com/vcerpasalas/wizzardingworld-clone/develop/json/news/newsData.json"
        );
      } else if (isFeatures) {
        response = await axios.get(
          "https://raw.githubusercontent.com/vcerpasalas/wizzardingworld-clone/develop/json/features/featuresData.json"
        );
      }
      const data = response.data;

      const contentData = data.pageProps.content;
      const latestContentData = contentData.referencedContent;
      const moreContentData = data.pageProps.moreToExplore;

      renderHeroHtml(contentData, pagesHero);
      renderLatestPostsHtml(contentData, latestContentData, latestPosts);
      renderMoreSectionHtml(contentData, moreContentData, morePostsContainer);
    } catch (error) {
      console.log(error);
    }
  }
};

getPagesData();*/

// Blog - Reproducir canción de Hogwarts

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
