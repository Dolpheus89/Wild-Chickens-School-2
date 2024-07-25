import NavBar from "../components/NavBar";
import Welcome from "../assets/Welcome.svg";
import { Link } from "react-router-dom";

import "../styles/Home.css";

export default function Home() {
  return (
    <div id="home">
      <NavBar title="Wild Chickens School" page="home" />
      <div id="content-box">
        <div id="welcome">
          <h2>Bienvenue sur le portail étudiant de la WCS</h2>
          <p>Sur cette application, vous allez :</p>
          <p>- Afficher des données d&apos;une API</p>
          <p>- Filtrer ces données par différents critères</p>
          <p>Cliquez sur Instructions pour commencer !</p>
          <Link to={`instructions`}>
            <button>Instructions</button>
          </Link>
        </div>
        <img src={Welcome} alt="nice looking chicken" />
      </div>
    </div>
  );
}
