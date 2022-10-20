import React from "react";

// assets
import facebook from '../assets/facebook.svg';
import instagram from '../assets/instagram.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/youtube.svg';

export default function Footer({ contact_ref }){
    return (
        <footer ref={contact_ref} className="__footer h-screen flex flex-col items-center justify-center px-10 md:px-0">
            <div className="mb-10 text-center">
                <h1 className="text-white text-2xl lg:text-6xl font-semibold"> Connect and stay updated with us on all of our social media channels </h1>
            </div>

            <ul className="w-full md:w-96 flex justify-between mx-auto">
                <li className="__social_links">
                    <a href="http://www.facebook.com"> <img className="w-16 h-16 md:w-65 md:h-65" src={facebook} alt="facebook" /></a>
                </li>
                <li className="__social_links">
                    <a href="http://www.instagram.com"> <img className="w-16 h-16 md:w-65 md:h-65" src={instagram} alt="instagram" /></a>
                </li>
                <li className="__social_links">
                    <a href="http://www.twitter.com"> <img className="w-16 h-16 md:w-65 md:h-65" src={twitter} alt="twitter" /></a>
                </li>
                <li className="__social_links">
                    <a href="http://www.linkedin.com"> <img className="w-16 h-16 md:w-65 md:h-65" src={linkedin} alt="linkedin" /></a>
                </li>
            </ul>
        </footer>
    )
}