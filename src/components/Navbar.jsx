import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header className="bg-gradient-to-r from-purple-100 to-blue-100 shadow-md py-4 px-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-purple-700">GCC-LC</h2>

            <nav>
                <ul className="flex items-center gap-6">
                    <li>
                        <Link
                            to="/"
                            className="bg-blue-200 hover:bg-blue-300 text-gray-800 font-medium px-4 py-2 rounded-md transition duration-200"
                        >
                            Home
                        </Link>
                    </li>
                    {/* <li>
                        <Link
                            to="/learnlanguage"
                            className="bg-yellow-200 hover:bg-yellow-300 text-gray-800 font-medium px-4 py-2 rounded-md transition duration-200"
                        >
                            Learn Languages
                        </Link>
                    </li> */}
                    <li>
                        <Link
                            to="/addvocabulary"
                            className="bg-green-200 hover:bg-green-300 text-gray-800 font-medium px-4 py-2 rounded-md transition duration-200"
                        >
                            Add Vocabulary
                        </Link>
                    </li>
                </ul>
            </nav>

            <div>
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200">
                    Login
                </button>
            </div>
        </header>
    );
};

export default Navbar;
