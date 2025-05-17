import React from 'react';
import { Link } from 'react-router-dom';

const NavAdmin = () => {
    return (
        <div className='bg-green-200 p-2 px-4'>
            <ul className='flex justify-between'>
                <li><Link to="/admin">Admin Panel</Link> </li>
                
                <li>Welcome: </li>
            </ul>
        </div>
    );
};

export default NavAdmin;