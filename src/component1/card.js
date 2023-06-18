import React, { useState } from 'react';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Card({ title, color, onDelete, onEdit }) {
    const navigate = useNavigate();

    const [isOptionsOpen, setIsOptionsOpen] = useState(false);

    const handleToggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen);
    };

    const handleEdit = () => {
        onEdit(title);
    };

    const handleDelete = () => {
        onDelete(title);
    };

    const handleDoubleClick = () => {
        navigate('/second');
    };

    return (
        <div className='card-container'>
            <div onDoubleClick={handleDoubleClick}>
                <div className='card'>
                    <div className='color' style={{ backgroundColor: color }}></div>
                    <div className='ctitle'>{title}</div>
                    <div className='options'>
                        <button className='options-button' onClick={handleToggleOptions}>
                            <FontAwesomeIcon icon={faEllipsisV} />
                        </button>
                        {isOptionsOpen && (
                            <ul className='options-list'>
                                <li onClick={handleEdit}>Edit</li>
                                <li onClick={handleDelete}>Delete</li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card;