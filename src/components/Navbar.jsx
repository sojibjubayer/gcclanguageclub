import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Mobile dropdown

  const isLoggedIn = !!localStorage.getItem('authToken');
  const user = isLoggedIn ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    navigate('/login');
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-purple-100 to-blue-100 shadow-md px-4 py-3 md:py-4 relative">
      {/* Flex Container */}
      <div className="flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <h2 className="text-2xl font-bold text-purple-700">GCC-LC</h2>
        </div>

        {/* Center: Navigation */}
        <div className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/"
            className="bg-blue-200 hover:bg-blue-300 px-4 py-2 rounded-md text-gray-800 font-medium transition duration-200"
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center bg-green-200 hover:bg-green-300 px-4 py-2 rounded-md text-gray-800 font-medium transition duration-200"
            >
              Learn Alphabet <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            {isDropdownOpen && (
              <ul className="absolute top-12 left-0 bg-white shadow-md rounded-md w-48 z-10">
                <li>
                  <Link
                    to="/arabicalphabet"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Arabic Alphabet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/englishalphabet"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    English Alphabet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hindialphabet"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Hindi Alphabet
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Right: Auth */}
        <div className="hidden md:flex items-center gap-4">
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
            <Link to="/login">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-semibold transition duration-200">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
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

          {/* Mobile Dropdown Toggle */}
          <div className="w-full">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="flex justify-between items-center w-full bg-green-200 px-4 py-2 rounded-md text-gray-800 font-medium"
            >
              Learn Alphabet
              <ChevronDown
                className={`ml-2 transition-transform duration-200 ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {isMobileDropdownOpen && (
              <ul className="pl-4 mt-1 space-y-1">
                <li>
                  <Link
                    to="/arabicalphabet"
                    className="block px-2 py-1 rounded hover:bg-gray-100"
                    onClick={() => {
                      setIsMobileDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Arabic Alphabet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/englishalphabet"
                    className="block px-2 py-1 rounded hover:bg-gray-100"
                    onClick={() => {
                      setIsMobileDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    English Alphabet
                  </Link>
                </li>
                <li>
                  <Link
                    to="/hindialphabet"
                    className="block px-2 py-1 rounded hover:bg-gray-100"
                    onClick={() => {
                      setIsMobileDropdownOpen(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Hindi Alphabet
                  </Link>
                </li>
              </ul>
            )}
          </div>

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
            <Link
              to="/login"
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md font-semibold w-full text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
