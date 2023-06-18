import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './component1/HomePage';
import SecondPage from './component2/SecondPage';


const App = () => {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/second" element={<SecondPage/>}/>
        </Routes> 
      </Router>
      
  );
};

export default App;