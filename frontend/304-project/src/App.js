import React, { useState, useEffect } from 'react';
import './App.css';

import NaviPage from './NaviPage';
import AddPage from './AddPage';
import ViewPage from './ViewPage';
import SortPage from './SortPage';
import SettingsPage from './SettingsPage';
import { render } from '@testing-library/react'; 

function App() {
  const [currentPage, setCurrentPage] = useState('NaviPage');

  const renderPage = () => {
    switch (currentPage) {
      case 'NaviPage':
        return <NaviPage />;
      case 'AddPage':
        return <AddPage />;
      case 'ViewPage':
        return <ViewPage />;
      case 'SortPage':
        return <SortPage />;
      case 'SettingsPage':
        return <SettingsPage />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <nav className="bg-gray-200 py-5">
        <div className="container mx-auto">
          <button className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2" onClick={() => setCurrentPage('AddPage')}>Add Entries</button>
          <button className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2" onClick={() => setCurrentPage('ViewPage')}>View Entries</button>
          <button className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2" onClick={() => setCurrentPage('SortPage')}>Sort Entries</button>
          <button className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2" onClick={() => setCurrentPage('SettingsPage')}>Edit Settings</button>
          <div className="absolute top-20 left-0 bg-black h-1 w-full"></div>
        </div>
      </nav>
      {renderPage()}
    </div>
  );
}

export default App;
