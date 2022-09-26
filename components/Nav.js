import { NavLink } from "react-router-dom";
import LanguageSelector from './LanguageSelector';
export default function Nav() {
    return (
        <nav>
            <NavLink to="/" end>
                Home
            </NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
            <LanguageSelector />
            
            
        </nav>
    );
}
