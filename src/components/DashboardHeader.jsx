import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import './DashboardHeader.css';

function DashboardHeader({ isSidebarOpen, toggleSidebar }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Prevent horizontal scrolling on mount
    document.body.style.overflowX = 'hidden';
    
    // Cleanup function to reset overflow
    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  function logOut() {
    navigate('/'); 
  }

  return (
    <div 
      className={`flex justify-between items-center p-3 md:p-4 bg-customGray text-white fixed top-0 left-0 right-0 h-[74px] z-40`}
    >
      <h1 className={`dashboard ${isSidebarOpen ? 'dashboard-shifted' : ''}`}>Dashboard</h1>

      <div className="flex items-center ml-auto space-x-2 sm:space-x-4">
        <button className="bg-white text-indigo-900 px-3 py-2 text-sm sm:text-base rounded cursor-pointer transition duration-300 hover:bg-indigo-100">
          Edit
        </button>
        <button 
          onClick={logOut} 
          className="bg-white text-indigo-900 px-3 py-2 text-sm sm:text-base rounded cursor-pointer transition duration-300 hover:bg-indigo-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default DashboardHeader;
