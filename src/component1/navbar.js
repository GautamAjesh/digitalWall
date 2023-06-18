import React from 'react';
import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import logoImage from './logo.png';




function Navbar({onCreateCard}){

    return (
        <nav className='navbar'>
           <div className='navbar-left'>
                <div className='logo'>
                    <img src={logoImage} alt="logo" />
                </div>
           </div>
           <div className='navbar-right'>
                <div className='search-menu'>
                    <div className='search-input'>
                        <input type="text" placeholder="Search.." />
                        <FontAwesomeIcon icon={faSearch}  className="search-icon"/>
                    </div>
                </div>
                <button className='create-dashboard-btn' onClick={onCreateCard}>
                    <FontAwesomeIcon icon={faPlus}  className="plus-icon"/>
                    Create new board
                </button>
           </div>

        </nav>
    );
}

export default Navbar;