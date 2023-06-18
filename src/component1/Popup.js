import React,{useState} from 'react';
import './Popup.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Popup({onClose, onConfirm}){

    const[title, setTitle]=useState('');
    const[color, setColor]=useState('');

   const handleConfirm=()=>{
    onConfirm(title, color);
   };

   const handleClose=()=>{
    onClose();
   };

   const handleTitleChange=(event)=>{
    setTitle(event.target.value);
   };


    return (
        <div className="create-dashboard-popup">
            <div className='head'>
                <h3>Add a name for your board</h3>
                <button className="close-button" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
            <input className="title" type="text" id="title" name="title" value={title} onChange={handleTitleChange}/>
            <h3>Select post colour</h3>
            <text>Here are some templates to help you get started</text>
            <div className="color-options">
                <div className="color-option" style={{ backgroundColor: '#A7F0F9' }} onClick={() => setColor('#A7F0F9')}></div>
                <div className="color-option" style={{ backgroundColor: '#C5C5FC' }} onClick={() => setColor('#C5C5FC')}></div>
                <div className="color-option" style={{ backgroundColor: '#FFAEC0' }} onClick={() => setColor('#FFAEC0')}></div>
                <div className="color-option" style={{ backgroundColor: '#FFCC66' }} onClick={() => setColor('#FFCC66')}></div>
            </div>
            <button className="create-btn" type="button" onClick={handleConfirm}>Create board</button>
        </div>
    );
}

export default Popup;