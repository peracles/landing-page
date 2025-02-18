import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="bg-blue-600 p-4 text-white">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <Link to="/" className="hover: text-blue-300">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover: text-blue-300">About Me</Link>
                </li>
                <li>
                    <Link to="/contact" className="hover: text-blue-300">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;