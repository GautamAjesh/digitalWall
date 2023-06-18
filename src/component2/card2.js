import React, { useState } from 'react';
import './card2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { Bookmark } from '@mui/icons-material';


const Card = ({ name, imageSrc, content, onDelete, onEdit, onLike }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const handleLike = () => {
        if (liked) {
            setLikeCount(likeCount - 1);
            setLiked(false);
        } else {
            setLikeCount(likeCount + 1);
            setLiked(true);
        }
    };


    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleEdit = () => {
        onEdit();
        setShowMenu(false);
    };

    const handleDelete = () => {
        onDelete();
        setShowMenu(false);
    };

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    return (
        
        <div className="card2">
            <div className="card2-header">
                <h2 className="card2-name">{name}</h2>
                <div className="card2-options">
                     <Bookmark className="bookmark-icon" />
                     <button className="menu-button" onClick={handleMenuToggle}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    {showMenu && (
                        <ul className="menu-list">
                            <li onClick={handleEdit}>Edit</li>
                            <li onClick={handleDelete}>Delete</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className='head-date'>{formattedDate}</div>
            <img src={imageSrc} alt={name} className="card2-image" />
            <div className="card2-content">
                <p className="card2-text">{content}</p>
            </div>
            <div className="horizontal-line"></div>
            <div className="card2-options">
                <div className="card2-buttons">
                    <button className="like-button" onClick={handleLike}>
                        <FontAwesomeIcon icon={faHeart} className={liked ? 'heart-icon active' : 'heart-icon'} />
                    </button>
                    <span className="like-count">{likeCount}</span>
                </div>
            </div>


        </div>

    );
};



export default Card;
