import { useState } from 'react';
import logo from "../assets/logojap.jpg";
import { Theme } from "./Theme";
import { FaBars } from 'react-icons/fa';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };
    return (
        <nav>
            <div className="nav-header">
                <img src={logo} alt="logo" />
                <FaBars className="menu-icon" onClick={toggleMenu} />
            </div>
            <ul className={`sidemenu ${isOpen ? 'open' : 'close'}`}>
                <li><a href="/" onClick={toggleMenu}>Home</a></li>
                <li><a href="#" onClick={toggleMenu}>Sign Up</a></li>
                <li><a href="/login" onClick={toggleMenu}>Login</a></li>
                <li><Theme /></li>
            </ul>
        </nav>
    );
}