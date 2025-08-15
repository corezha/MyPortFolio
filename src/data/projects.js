import { BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Movie Website",
    image: "./IMDB.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "This website provides information about popular , top-rated and upcoming movies.",
    github: "https://github.com/corezha/IMDB",
  },
  {
    id: "2",
    name: "Ecommerce Website",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi, TbDatabase],
    description: "This website provides users with all the basic kinds of shopping items.",
    github: "https://github.com/corezha/Ecommerce-Demo",
  },
  {
    id: "3",
    name: "Chat Application",
    image: "./chatapp.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoFirebase],
    description: "This chat application provides an interface to the users to interact with their friends.",
    github: "https://github.com/corezha/Chat-App",
  },
  {
    id: "4",
    name: "Expense Tracker",
    image: "./expense-tracker.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoReact, BiLogoRedux, BiLogoTailwindCss],
    description: "This application provides an interface for users to track their expenses .",
    github: "https://github.com/corezha/Expense-Tracker",
  },
  {
    id: "5",
    name: "Car Rental Website",
    image: "./car-rental-app.png",
    icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "This is an online platform that allows users to rent cars for personal or business use.",
    github: "https://github.com/corezha/nextjs-car-rental-app",
  },
  {
    id: "8",
    name: "Blog Application",
    image: "./blog-app.png",
    icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "This application allows users to express their thoughts and experiences through blogs.",
    github: "https://github.com/corezha/Blog-Application",
  },
];

export default ProjectsData;
