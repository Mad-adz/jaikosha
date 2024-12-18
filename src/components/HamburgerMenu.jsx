// eslint-disable-next-line react/prop-types
const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <button
      onClick={toggleMenu}
      className={`relative w-10 h-10 flex flex-col items-center justify-center gap-2 transform transition-transform duration-300 ${
        isMenuOpen ? "rotate-180" : ""
      }`}
      aria-label="Toggle Menu"
    >
      {/* Bar 1 */}
      <div
        className={`w-7 h-1 bg-zinc-600 rounded transition-transform  duration-300 ${
          isMenuOpen ? "w-full rotate-45 translate-y-3" : "w-3/4"
        }`}
      />
      {/* Bar 2 */}
      <div
        className={`w-full h-1 bg-zinc-600 rounded transition-transform duration-300 ${
          isMenuOpen ? "scale-x-0" : ""
        }`}
      />
      {/* Bar 3 */}
      <div
        className={`w-7 h-1 bg-zinc-600 rounded transition-transform duration-300 ${
          isMenuOpen ? "w-full -rotate-45 -translate-y-3" : "w-3/4"
        }`}
      />
    </button>
  );
};

export default HamburgerMenu;
