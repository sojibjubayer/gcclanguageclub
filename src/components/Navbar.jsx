import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Optional: for icons

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isLoggedIn = !!localStorage.getItem('authToken');
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-purple-100 to-blue-100 shadow-md px-4 py-3 md:py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-purple-700">GCC-LC</h2>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-md text-gray-800 font-medium transition duration-200">
            Home
          </Link>
          <Link to="/addvocabulary" className="bg-green-200 hover:bg-green-300 px-4 py-2 rounded-md text-gray-800 font-medium transition duration-200">
            Add Vocabulary
          </Link>
          {isLoggedIn ? (
            <>
              <span className="text-gray-700 font-medium">Welcome, {user?.name || 'User'}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-semibold transition duration-200">
                  Login
                </button>
              </Link>
              
            </>
          )}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-purple-700"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-3 flex flex-col items-start">
          <Link
            to="/"
            className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-md text-gray-800 font-medium w-full text-left"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/addvocabulary"
            className="bg-green-200 hover:bg-green-300 px-4 py-2 rounded-md text-gray-800 font-medium w-full text-left"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Add Vocabulary
          </Link>

          {isLoggedIn ? (
            <>
              <span className="text-gray-700 font-medium px-2">Welcome, {user?.name || 'User'}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-semibold w-full text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-semibold w-full text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
             
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
