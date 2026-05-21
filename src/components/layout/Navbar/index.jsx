import './Navbar.css';
import { FiSearch, FiPlus, FiMenu } from 'react-icons/fi';
import { IoDiamondSharp } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-search-wrapper">
        <input
          type="text"
          placeholder="Find influencers to collaborate with"
          aria-label="Search influencers"
          className="navbar-search-input"
        />
        <FiSearch size={14} className="navbar-search-icon" />
      </div>
      <div className="navbar-actions">
        <button className="navbar-upgrade-button">
          <IoDiamondSharp size={14} /> Upgrade
        </button>
        <button className="navbar-create-button">
          <FiPlus size={14} /> Create Campaign
        </button>
        <button
          type="button"
          aria-label="Profile"
          className="navbar-profile-button"
        >
          <CgProfile size={28} />
        </button>
        <FiMenu size={20} className="navbar-menu-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
