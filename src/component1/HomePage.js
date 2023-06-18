import React, { useState } from 'react';
import Card from './card';
import './HomePage.css';
import Navbar from './navbar';
import Popup from './Popup';

function HomePage() {
    const [cards, setCards] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
  
    const handleCreateCard = () => {
      setShowPopup(true);
    };
  
    const handlePopupClose = () => {
      setShowPopup(false);
    };
  
    const handleCreateDashboard = (title, color) => {
      if (title && color) {
        const newCard = {
          id: Date.now(),
          title,
          color,
        };
        setCards([...cards, newCard]);
        handlePopupClose();
      }
    };
  
    const handleEditCard = (id) => {
      console.log(`Editing card with id ${id}`);
    };
  
    const handleDeleteCard = (title) => {
      setCards(cards.filter((card) => card.title !== title));
    };
  
    return (
      <div className="app">
        <Navbar onCreateCard={handleCreateCard} />
        <div className="dashBoard-header">
          <h1>My boards</h1>
        </div>
        {showPopup && (
          <Popup onClose={handlePopupClose} onConfirm={handleCreateDashboard} />
        )}
        <div className="card-container">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              color={card.color}
              onEdit={handleEditCard}
              onDelete={handleDeleteCard}
            />
          ))}
        </div>
      </div>
    );
}

export default HomePage;