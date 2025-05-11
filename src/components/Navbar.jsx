import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='bg-gradient-to-r from-purple-100 to-blue-100 shadow-md py-4 flex justify-between px-2'>
            <h2>GCC-LC</h2>
            <ul className='flex justify-items-center gap-10 '>
                <li><Link className='px-2 rounded-md bg-amber-200 p-1' to="/">Home</Link></li>
                <li><Link className='px-2 rounded-md bg-amber-200 p-1' to="/learnlanguage">Learn Languages</Link></li>
                <li><Link className='px-2 rounded-md bg-amber-200 p-1' to="/addvocabulary">Add Vocabulary</Link></li>
            </ul>
            <div>
                Login
            </div>
        </div>
    );
};

export default Navbar;