import "../styles/NavBar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar({ title, page }) {
  return (
    <header>
      <h1>{title}</h1>
      <ul>
        <li className={page === "home" ? "active" : ""}>
          <Link to={`/`}>Home</Link>
        </li>
        <li className={page === "instructions" ? "active" : ""}>
          <Link to={`/instructions`}>Instructions</Link>
        </li>
        <li className={page === "students" ? "active" : ""}>
          <Link to={`/students`}>Students</Link>
        </li>
      </ul>
    </header>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};
