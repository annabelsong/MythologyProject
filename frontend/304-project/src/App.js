import React, { useState } from 'react';
import './App.css';

import SplashPage from './SplashPage';
import AddPage from './AddPage';
import ViewPage from './ViewPage';
import SortPage from './SortPage';

function App() {
  const [currentPage, setCurrentPage] = useState('SplashPage');

  const renderPage = () => {
    switch (currentPage) {
      case 'SplashPage':
        return <SplashPage />;
      case 'AddPage':
        return <AddPage />;
      case 'ViewPage':
        return <ViewPage />;
      case 'SortPage':
        return <SortPage />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="bg-gray-200 py-5">
        <div className="container mx-auto">
          <button className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={() => setCurrentPage('SplashPage')}>Main Menu</button>
          <button className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={() => setCurrentPage('AddPage')}>Add Entries</button>
          <button className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={() => setCurrentPage('ViewPage')}>View Entries</button>
          <button className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold" onClick={() => setCurrentPage('SortPage')}>Sort Entries</button>
        </div>
      </nav>
      <div className="absolute top-20 left-0 bg-black h-1 w-full"></div>
      {renderPage()}
    </div>
  );
}

export default App;
