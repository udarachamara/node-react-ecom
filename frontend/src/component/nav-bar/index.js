import './style.scss';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars, faMapMarker, faUser, faClipboardList } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
    return (
        <nav>
            <Link to="/" className="nav-brand">
                <FontAwesomeIcon icon={faCoffee} /> Brand
            </Link>
            <button className="navbar-toggler d-block d-md-none " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon color="#fff" icon={faBars} />
            </button>
            <ul className="nav-list nav-left d-none d-md-block text-left">
                <Link className="nav-item" to="/">Home</Link>
                <Link className="nav-item" to="/about">About</Link>
                <Link className="nav-item" to="/contact">Contact</Link>
            </ul>

            <ul className="nav-list nav-right d-none d-md-block text-right">
                <Link className="nav-item" to="/">
                    <FontAwesomeIcon icon={faMapMarker} />
                    <div className="bottom-line"></div>
                </Link>
                <Link className="nav-item" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                    <div className="bottom-line"></div>
                </Link>
                <Link className="nav-item" to="/contact">
                    <FontAwesomeIcon icon={faClipboardList} />
                    <div className="bottom-line"></div>
                </Link>
            </ul>
        </nav>

    )
}

export default NavBar;