export const headerList = [
  {
    id: 1,
    title: "News & Features",
    classAndId: "news-features",
    parentId: "news&features",
    submenu: [
      {
        subId: 10,
        title: "news",
        image: "https://vcerpasalas.github.io/wizzardingworld-clone/images/header/news.webp",
        link: "./news.html",
      },
      {
        subId: 11,
        title: "features",
        image: "https://vcerpasalas.github.io/wizzardingworld-clone/images/header/features.png",
        link: "./features.html",
      },
    ],
  },
  { id: 2, link: "", title: "Quizzes", parentId: null },
  { id: 3, link: "", title: "Puzzles", parentId: null },
  { id: 4, link: "", title: "J.K. Rowling Archive", parentId: null },
  {
    id: 5,
    link: "",
    title: "Discover",
    classAndId: "discover",
    parentId: "discover",
    submenu: [
      {
        subId: 1,
        title: "Books",
        image: "https://vcerpasalas.github.io/wizzardingworld-clone/images/header/book.png",
        link: "./apis/discover-books-api/index.html",
      },
      {
        subId: 2,
        title: "films",
        image: "https://vcerpasalas.github.io/wizzardingworld-clone/images/header/films.webp",
        link: "./apis/discover-films-api/index.html",
      },
      {
        subId: 3,
        title: "portkey games",
        image: "https://vcerpasalas.github.io/wizzardingworld-clone/images/header/portkey-games.png",
        link: "./apis/discover-games-api/index.html",
      },
      {
        subId: 4,
        title: "on stage",
        image: "https://vcerpasalas.github.io/wizzardingworld-clone/images/header/on-stage.png",
        link: "./apis/discover-teatro-api/index.html",
      },
      {
        subId: 5,
        title: "experiences",
        image: "https://vcerpasalas.github.io/wizzardingworld-clone/images/header/experiences.webp",
        link: "./apis/discover-experiences-api/index.html",
      },
    ],
  },
  {
    id: 6,
    link: "https://my.wizardingworld.com/sorting-hat",
    title: "Hogwarts Sorting",
    parentId: null,
  },
  {
    id: 7,
    link: "https://www.wizardingworld.com/collections/fantastic-beasts-the-secrets-of-dumbledore",
    title: "Secrets of Dumbledure",
    parentId: null,
  },
  {
    id: 8,
    link: "https://www.wizardingworld.com/store?passthrough=true&store=hpshopuk",
    title: "Shop",
    parentId: null,
  },
];
