import COVID from "../../assets/projects_images/COVID.png";
import METEO from "../../assets/projects_images/meteo.png";
import Portfolio from "../../assets/projects_images/Portfo.png";
import Cov from "../../assets/projects_images/CovAngular.png";
const data_projects = [
  {
    name: "traqueur covid 19",
    image: COVID,
    site_url: "https://traqueur-covid-19.netlify.app/",
    category: ["react.js", "charts.js", "Material UI", "api"],
  },
  {
    name: "mon portfolio",
    image: Portfolio,
    site_url: "https://ouahabfenniche.netlify.app/",
    category: ["react.js", "bootstrap", "react-router", "framer-motion"],
  },
  {
    name: "covid traqueur",
    image: Cov,
    site_url: "https://traqueurcovid19.netlify.app/",
    category: ["angular", "bootstrap", "react-router", "framer-motion"],
  },
  {
    name: "météo app",
    image: METEO,
    site_url: "https://meteo-git-main.fenniche-ouahab.vercel.app/",
    category: ["react.js", "react-dom", "api"],
  },
];

export default data_projects;
