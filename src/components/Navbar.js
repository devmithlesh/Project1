import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "./assets/Rectangle 4.png";
import Twitter from "./assets/social-icons/twitter.png";
import Facebook from "./assets/social-icons/facebook.png";
import Linkedin from "./assets/social-icons/linkedin.png";
import menubar from "./assets/social-icons/menubar.png";
import { useState } from "react";
function Navbar() {
  const [menu, setmenu] = useState(true);
  const buttonmenu = () => {
    setmenu(!menu);
  };

  return (
    <>
      <header className="container mx-auto md:px-28 px-6 py-6 ">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <ul className={menu ? "mediaqnav" : "mediaqnav active"}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="#">Product</Link>
              </li>
              <li>
                <Link to="#">Pricing</Link>
              </li>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
            <img src={Logo} alt="logo-nav" className="logo-nav z-10 md:z-0" />
          </div>
          <div className="md:flex hidden items-center">
            <img src={Twitter} alt="twitter" className="logo-nav-png" />
            <img
              src={Facebook}
              alt="facebook"
              className="logo-nav-png facebook"
            />
            <img src={Linkedin} alt="linkedin" className="logo-nav-png" />
          </div>
          <div className="flex md:hidden z-10 md:z-0" onClick={buttonmenu}>
            {menu ? (
              <img src={menubar} alt="menubar" />
            ) : (
              <i className="fa-solid fa-xmark text-gray-100 text-2xl"></i>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
