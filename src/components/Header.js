import { Link } from 'react-router-dom';
import logo from "../assets/logo.svg";

const Header = ({children, theme, setTheme}) => {
    return (
        <header>
            <span className="logo">
                <img src={logo} alt="Logo" />
                <span>{children}</span>
            </span>
            <nav className="d-flex gap-2">
                <Link to="/" className="btn btn-navbar">Home</Link>
                <Link to="/tasks" className="btn btn-navbar">Tasks</Link>
                <Link to="/categories" className="btn btn-navbar">Categories</Link>
                <Link to="/settings" className="btn btn-navbar">Settings</Link>
                <Link to="/about" className="btn btn-navbar">About</Link>
                <Link to="/contactus" className="btn btn-navbar">Contact us</Link>
            </nav>

            <span className="themeSelector">
                <span onClick={() => setTheme("light")} className={theme === "light" ? "light activeTheme" : "light"}></span>
                <span onClick={() => setTheme("medium")} className={theme === "medium" ? "medium activeTheme" : "medium"}></span>
                <span onClick={() => setTheme("dark")} className={theme === "dark" ? "dark activeTheme" : "dark"}></span>
                <span onClick={() => setTheme("gOne")} className={theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
                <span onClick={() => setTheme("gTwo")} className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
                <span onClick={() => setTheme("gThree")} className={theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
            </span>
        </header>
    );
}

export default Header;
