import React from 'react';

const AppBar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-gray-400">About us</a>
          <a href="#" className="hover:text-gray-400">Achievements</a>
          <a href="#" className="hover:text-gray-400">Competitions</a>
          <a href="#" className="hover:text-gray-400">Sponsors</a>
          <a href="#" className="hover:text-gray-400">Board</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default AppBar;
