import "../styles/NavBar.css"
import PropTypes from 'prop-types'

export default function NavBar ({title}) {
    return (
        <header>
            <h1>{title}</h1>
            <ul>
                <li>Home</li>
                <li>Instructions</li>
                <li>Students</li>
            </ul>
        </header>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
};