// components/Header.js
import Head from 'next/head';
import { FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const Header = ({ logo, menu, keywords }) => {
  return (
    <div className='header' id='header'>
      {/* Language Switcher */}
      <div className="switch-language w-25">
      <TbWorld />
      </div>

      {/* Site Logo */}
      <div className='site-logo w-50'>
        <img src={logo} alt="Site Logo" className="logo-image m-auto" />
      </div>

      {/* Search Bar */}
      <div className='item-search w-25'>
        <form className="search-form">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button">
          <FaSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;