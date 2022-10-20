import React  from "react";

// assets
import logo from '../assets/logo.svg';

const Navbar = ({ handle_click }) => {
    return (
        <nav className="__navbar flex items-center justify-between px-8 py-4 md:px-16 md:py-8">
            <div className="">
                <img src={logo} alt='Blinxhq' className="w-40" />
            </div>

            <button 
                className="border-2 border-white rounded-full px-6 py-3 text-white font-medium"
                onClick={handle_click}
            > Contact us </button>
        </nav>
    )
}

export default Navbar;