import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { HamburgerMenu, SubscribeBtn } from ".";
import { jaikosha } from "../assets/images";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      // enablePageScroll();
    } else {
      setIsMenuOpen(true);
      // disablePageScroll();
    }
  };
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-2 py-2 backdrop-blur-sm border-b border-zinc-200 ${
        isMenuOpen ? "bg-yellow-50" : "bg-yellow-50 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <NavLink>
            <img className="block w-20 h-20" src={jaikosha} alt="Jai Kosha" />
          </NavLink>
          <nav
            className={`${
              isMenuOpen ? "flex  flex-col lg:flex-row gap-4" : "hidden"
            } fixed top-[6rem] left-0 right-0 bottom-0 lg:static lg:flex lg:items-center lg:bg-transparent`}
          >
            <ul className="relative z-2 flex flex-col bg-zinc-200 lg:bg-transparent items-center justify-center lg:flex-row lg:mr-10 py-4 lg:py-0">
              {navLinks.map((link) => (
                <li key={link.id} onClick={() => setIsMenuOpen(false)}>
                  <NavLink
                    to={link.to}
                    className={({ isActive }) =>
                      `block relative transition-colors  ${
                        link.onlyMobile ? "lg:hidden" : ""
                      } p-5 lg:font-semibold ${
                        isActive ? "z-2 lg:text-emerald-600" : "lg:text-black"
                      } lg:leading-5 lg:hover:text-emerald-500`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex justify-center lg:justify-end mt-4 lg:mt-0 bg-transparent">
              <SubscribeBtn />
            </div>
          </nav>
          <div className="lg:hidden">
            <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
