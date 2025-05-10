import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <div ><Link className='block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md' to="/learnarabic">Learn Arabic <br /> अरबी सीखें  <br /> আরবি শিখুন </Link></div>
            <div ><Link className='block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md'  to="/learnenglish">Learn English</Link></div>
            <div ><Link className='block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md' to="/learnhindi">Learn Hindi</Link></div>
            
            
        </div>
    );
};

export default Home;