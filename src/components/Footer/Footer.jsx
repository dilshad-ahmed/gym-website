import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

export const Navlinks = [
  {
    id: 1,
    name: "SERVICES",
    link: "/#services",
  },
  {
    id: 2,
    name: "ABOUT",
    link: "/#about",
  },
  {
    id: 3,
    name: "JOIN",
    link: "/#join",
  },
];
const Footer = () => {
  return (
    <div
      className="py-10 w-full bg-gray-100 dark:bg-dark dark:text-white duration-300
    "
    >
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center">
          <div className="flex items-center justify-center gap-3">
            <img src={Logo} alt="" className="w-16 " />
            <div>
              {/* Social Handle */}
              <div className="flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>
          <div className="sm:block hidden">Contact us: +91 123456789</div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold  hover:text-primary py-1 hover:border-primary transition-colors duration-300  "
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Footer;
