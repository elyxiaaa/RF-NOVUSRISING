import { useState } from "react";
import { FaHome, FaList } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo.png'

function Navbar({ activeTab }: { activeTab: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getUnderlineClass = (tabName: string) =>
    activeTab === tabName
      ? "absolute left-0 top-8 inline-block w-full h-[2px] bg-yellow-500 shadow-[0px_0px_14px_3px_rgba(255,215,0,0.7)] transition-all duration-300"
      : "absolute left-0 top-8 inline-block w-0 h-[1px] bg-transparent group-hover:w-full group-hover:bg-yellow-500 group-hover:shadow-[0px_0px_14px_3px_rgba(255,215,0,0.7)] transition-all duration-300";

  const getTextClass = (tabName: string) =>
    activeTab === tabName
      ? "text-yellow-500 font-semibold"
      : "text-white"; 

  return (
    <nav className="bg-black text-white px-6 py-7 sticky top-0 z-50 font-StrongSword">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-32 w-auto mt-3" />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex justify-center flex-1">
          <ul className="flex gap-6 items-center text-lg font-medium">
            {/* HOME */}
            <li className="relative flex items-center gap-2 cursor-pointer hover:text-yellow-500 group">
              <Link to="/" className="flex items-center">
                <FaHome className={`mr-2 ${getTextClass("home-section")}`} />
                <span className={getTextClass("home-section")}>HOME</span>
                <span className={getUnderlineClass("home-section")} />
              </Link>
            </li>

            {/* GAME GUIDES */}
            <li className="relative cursor-pointer hover:text-yellow-500 group">
              <div
                tabIndex={0}
                role="button"
                className="flex items-center gap-2 text-white hover:text-yellow-500 cursor-pointer"
              >
                <span className={`${getTextClass("game-guides")}`}>GAME GUIDES</span>
                <IoMdArrowDropdown className={`${getTextClass("game-guides")}`} />
                <span className={getUnderlineClass("game-guides")} />
              </div>
              {/* Dropdown Menu */}
              <ul className="absolute left-0 hidden group-hover:block bg-black text-white rounded shadow-lg w-60 p-2 z-10">
                <li className="hover:text-yellow-500 p-2">
                  <Link to="/combination">COMBINATION</Link>
                </li>
                <li className="hover:text-yellow-500 p-2">
                  <Link to="/farmsite">FARM SITES</Link>
                </li>
                <li className="hover:text-yellow-500 p-2">
                  <Link to="/droplist">DROPLIST</Link>
                </li>
                <li className="hover:text-yellow-500 p-2">
                  <Link to="/dailyquest">DAILYQUEST</Link>
                </li>
                <li className="hover:text-yellow-500 p-2">
                  <Link to="/boxItem">ITEM BOXES</Link>
                </li>
                <li className="hover:text-yellow-500 p-2">
                  <Link to="/itemsource">ITEM SOURCES</Link>
                </li>
              </ul>
            </li>

            {/* SERVER RULES */}
            <li className="relative flex items-center gap-2 cursor-pointer hover:text-yellow-500 group">
              <Link to="/rules" className="flex gap-2 items-center">
                <FaList className={`${getTextClass("server-rules")}`} />
                <span className={getTextClass("server-rules")}>SERVER RULES</span>
                <span className={getUnderlineClass("server-rules")} />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* MOBILE MENU BUTTON */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden bg-black text-white font-COP1 mt-2 p-4 space-y-3 shadow-lg rounded">
          <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-500">
            <Link to="/" className="flex items-center">
              <FaHome className="mr-2" /> HOME
            </Link>
          </li>
          <li>
            <Link to="/rules" className="flex items-center gap-2 hover:text-yellow-500">
              <FaList /> SERVER RULES
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
