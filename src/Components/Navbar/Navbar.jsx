import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {Link} from 'react-scroll'
import logo from "../../assets/photos/logo.png";
import { RiMenuFoldFill } from "react-icons/ri";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMenu = () =>{
mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} `}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? "" : 'hide-mobile-menu' }>
        <li>
          
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
           
          >
            Home
          </Link>
        </li>
        <li>
          
          <Link
            activeClass="active"
            to="program"
            spy={true}
            smooth={true}
            offset={-260}
            duration={500}
            
          >
            Program
          </Link>
        </li>
        <li>
          
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
           
          >
            About us
          </Link>
        </li>
        <li>
          
          <Link
            activeClass="active"
            to="campus"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
          
          >
            Campus
          </Link>
        </li>
        <li>
          
          <Link
            activeClass="active"
            to="testimonials"
            spy={true}
            smooth={true}
            offset={-250}
            duration={500}
            
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            // activeClass="active"
            to="contact"
            // spy={true}
            smooth={true}
            offset={-280}
            duration={500}
          
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      


<RiMenuFoldFill className="menu-icon" onClick={toggleMenu}/>
    </nav>
  );
};

export default Navbar;
