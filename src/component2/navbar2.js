import React from 'react';
import './navbar2.css';
import logoImage from './logo2.png';
import { ArrowBack, Search, Bookmark} from '@mui/icons-material';

const NavBar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <div className="left">
                    <ArrowBack className="back-icon" />
                    <img src={logoImage} alt="Logo" className="logo" />
                    <h1 className="title">title</h1>
                </div>
                <div className="right">
                    <Search className="search-icon" />
                    <div className="line"></div>
                    <Bookmark className="bookmark-icon" />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;