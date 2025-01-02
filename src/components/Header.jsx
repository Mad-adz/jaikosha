import { useState } from "react";
import {
  LuChevronDown,
  LuUser,
  LuSettings,
  LuLogOut,
  LuMenu,
} from "react-icons/lu";
import { MdDashboard } from "react-icons/md";
import { RiPagesLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { jaikosha } from "../assets/images";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [openWorkshops, setOpenWorkshops] = useState(false);
  // const [openProfile, setOpenProfile] = useState(false);

  const [openDropdown, setOpenDropdown] = useState({
    workshops: false,
    profile: false,
  });

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleDropdown = (key) =>
    setOpenDropdown((prev) => ({ ...prev, [key]: !prev[key] }));

  const navLinks = [
    { id: 1, to: "", label: "Home", hasSubmenu: false },
    { id: 2, to: "about", label: "About", hasSubmenu: false },
    { id: 3, to: "initiatives", label: "Initiatives", hasSubmenu: false },
    { id: 4, to: "events", label: "Events", hasSubmenu: false },
    {
      id: 5,
      to: "",
      label: "Workshops",
      hasSubmenu: true,
      openKey: "workshops",
      submenu: [
        { id: 1, to: "online", label: "Online" },
        { id: 2, to: "offline", label: "Offline" },
      ],
    },
    { id: 6, to: "yendhrakovil", label: "Yendhra Kovil", hasSubmenu: false },
    { id: 7, to: "contact", label: "Contact", hasSubmenu: false },
    { id: 8, to: "donate", label: "Donate", hasSubmenu: false },
  ];

  return (
    <header 
    // className="bg-yellow-50 py-2"
    className={`fixed top-0 left-0 w-full z-50 px-2 py-2 backdrop-blur-sm border-b border-zinc-200 ${
      isMenuOpen ? "bg-yellow-50" : "bg-yellow-50 backdrop-blur-sm"
    }`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between flex-grow">
            <div className="flex-shrink-0">
              <NavLink to={"/"}>
                <img
                  className="block w-20 h-20"
                  src={jaikosha}
                  alt="Jai Kosha"
                />
              </NavLink>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-2">
                {navLinks.map((link) =>
                  link.hasSubmenu ? (
                    <li key={link.id} className="relative">
                      <span
                        className="relative"
                        // onMouseEnter={() => setOpenWorkshops(true)}
                        // onMouseLeave={() => setOpenWorkshops(false)}
                        onMouseEnter={() => handleDropdown(link.openKey)}
                        onMouseLeave={() => handleDropdown(link.openKey)}
                      >
                        <button className="flex flex-row items-center px-3 py-2 ml-4 lg:ml-0 text-sm font-medium text-zinc-600 rounded-md hover:text-emerald-600 hover:bg-yellow-100 focus:outline-none focus:text-emerald-600">
                          <span className="mx-2">Workshops</span>
                          <LuChevronDown />
                        </button>
                        <span
                          className={`absolute right-0 w-32 mt-0 origin-top-right rounded-md shadow-lg bg-white
                          transition-transform transform ease-out duration-100 
                          ${
                            openDropdown[link.openKey]
                              ? "opacity-100 scale-100"
                              : "opacity-0 scale-95 pointer-events-none"
                          }`}
                        >
                          {/* Submenu */}
                          <ul className="py-1 bg-white rounded-md shadow-xs">
                            {link.submenu.map((sublink) => (
                              <li key={sublink.id}>
                                <NavLink
                                  to={sublink.to}
                                  className="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                                >
                                  {sublink.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </span>
                      </span>
                    </li>
                  ) : (
                    <li key={link.id}>
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `${
                            isActive ? "text-emerald-600 bg-yellow-100" : "text-zinc-600 bg-transparent"
                          } flex flex-row items-center p-2 ml-4 lg:ml-0 text-sm font-medium text-zinc-600 rounded-md hover:text-emerald-600 hover:bg-yellow-100 focus:outline-none focus:text-emerald-600`
                        }
                      >
                        <span className="mx-2">{link.label}</span>
                      </NavLink>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center ml-4 md:ml-6">
              <div
                className="relative ml-3"
                // onMouseEnter={() => setOpenProfile(true)}
                // onMouseLeave={() => setOpenProfile(false)}
                onMouseEnter={() => handleDropdown("profile")}
                onMouseLeave={() => handleDropdown("profile")}
              >
                <div>
                  <button
                    className="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:shadow-solid"
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  className={`absolute right-0 w-36 mt-0 origin-top-right rounded-md shadow-lg bg-white
                    transition-transform transform ease-out duration-100 
                    ${
                      openDropdown["profile"]
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                >
                  <div className="py-1 bg-white rounded-md shadow-xs">
                    <NavLink
                      to=""
                      className="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                    >
                      <LuUser />
                      <span className="ml-2">Profile</span>
                    </NavLink>
                    <NavLink
                      to=""
                      className="flex flex-row items-center px-4 py-2 text-sm text-gray-700 focus:text-gray-900 hover:text-gray-900 focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
                    >
                      <LuSettings />
                      <span className="ml-2">Settings</span>
                    </NavLink>
                    <NavLink
                      to=""
                      className="flex flex-row items-center px-4 py-2 text-sm text-red-500 hover:text-red-700 hover:bg-red-100 focus:outline-none focus:text-red-700 focus:bg-red-100"
                    >
                      <LuLogOut />
                      <span className="ml-2">Sign out</span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex lg:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-zinc-600 rounded-md hover:text-emerald-500 hover:bg-yellow-100 focus:outline-none focus:bg-emerald-100 focus:text-emerald-600"
              onClick={toggleMenu}
            >
              <LuMenu className="text-3xl" />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden`}>
        <div className="container">
          <ul className="pt-2 pb-3">
            {navLinks.map((link) =>
              link.hasSubmenu ? (
                <li key={link.id}>
                  <span className="relative">
                    <button
                      className="w-full flex flex-row items-center px-3 py-2 text-base font-medium text-zinc-600 bg-transparent rounded-md focus:outline-none focus:text-emerald-600 focus:bg-yellow-100 mt-2"
                      // onClick={() => {
                      //   setOpenWorkshops((prev) => !prev);
                      // }}
                      onClick={() => handleDropdown(link.openKey)}
                    >
                      <RiPagesLine />
                      <span className="mx-2">Workshops</span>
                      <LuChevronDown />
                    </button>
                    <ul
                      className={`${
                        openDropdown[link.openKey] ? "block" : "hidden"
                      } px-2 py-2 mt-2 bg-yellow-100 rounded-md shadow-xs`}
                    >
                      {link.submenu.map((sublink) => (
                        <li
                          key={sublink.id}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <NavLink
                            to={sublink.to}
                            className="flex flex-row items-center px-3 py-2 text-base font-medium text-zinc-600 bg-transparent rounded-md focus:outline-none focus:text-emerald-600 focus:bg-yellow-50"
                          >
                            {sublink.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </span>
                </li>
              ) : (
                <li key={link.id} onClick={() => setIsMenuOpen(false)}>
                  <NavLink
                    to={link.to}
                    className="flex flex-row items-center px-3 py-2 text-base font-medium text-zinc-600 bg-transparent rounded-md focus:outline-none focus:text-emerald-600 focus:bg-yellow-100 mt-2"
                  >
                    <MdDashboard />
                    <span className="ml-2">{link.label}</span>
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </div>
        <div className="container">
          <div className="py-4 border-t border-gray-700">
            <button
              className="flex items-center w-full focus:outline-none"
              // onClick={() => {
              //   setOpenProfile((prev) => !prev);
              // }}
              onClick={() => handleDropdown("profile")}
            >
              <div className="flex items-center w-full text-left">
                <div className="flex-shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-zinc-800">
                    Tom Cook
                  </div>
                  <div className="mt-1 text-sm font-medium leading-none text-zinc-500">
                    tom@example.com
                  </div>
                </div>
              </div>
              <div className="text-zinc-500">
                <LuChevronDown />
              </div>
            </button>
            <div
              className={`${
                openDropdown["profile"] ? "block" : "hidden"
              } px-2 py-2 mt-4 bg-yellow-100 rounded-md shadow-xs`}
            >
              <NavLink
                to=""
                className="flex flex-row items-center px-3 py-2 text-base font-medium text-zinc-600 bg-transparent rounded-md focus:outline-none focus:text-emerald-600 focus:bg-yellow-50"
                role="menuitem"
              >
                <LuUser />
                <span className="ml-2">Profile</span>
              </NavLink>
              <NavLink
                to=""
                className="flex flex-row items-center px-3 py-2 text-base font-medium text-zinc-600 bg-transparent rounded-md focus:outline-none focus:text-emerald-600 focus:bg-yellow-50"
                role="menuitem"
              >
                <LuSettings />
                <span className="ml-2">Settings</span>
              </NavLink>
              <NavLink
                to=""
                className="flex flex-row items-center px-3 py-2 mt-1 text-base font-medium text-red-500 rounded-md hover:text-red-700 hover:bg-red-200 focus:outline-none focus:text-red-700 focus:bg-red-200"
                role="menuitem"
              >
                <LuLogOut />
                <span className="ml-2">Sign out</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
