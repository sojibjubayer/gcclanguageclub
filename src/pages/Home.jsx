import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-10 text-center">Start Learning Languages</h1>

      <div className="grid gap-6 w-full max-w-md">
        <Link
          to="/learnarabic"
          className="bg-blue-100 hover:bg-white text-purple-700 transition duration-300 p-6 rounded-2xl shadow-md text-center text-base font-medium "
        >
          Arabic  ⟷ English ⟷ हिंदी ⟷ বাংলা   <br /> <span className="text-sm ">English ⟷ हिंदी </span> <br />
          <span className="text-sm ">हिंदी ⟷ বাংলা </span>
        </Link>

        <Link
          to="/arabicalphabet"
          className="bg-blue-100 hover:bg-white text-purple-700 transition duration-300 p-6 rounded-2xl shadow-md text-center text-lg font-medium "
        >
          Arabic Alphabet <br /> <span className="text-sm "> अरबी अक्षर </span> <br />
          <span className="text-sm "> আরবি বর্ণমালা </span> 
        </Link>

        <Link
          to="/englishalphabet"
          className="bg-blue-100 hover:bg-white text-purple-700 transition duration-300 p-6 rounded-2xl shadow-md text-center text-lg font-medium "
        >
          English Alphabet <br /> <span className="text-sm ">अंग्रेजी वर्णमाला</span> <br />
          <span className="text-sm "> ইংরেজি বর্ণমালা </span>
        </Link>

        <Link
          to="/hindialphabet"
          className="bg-blue-100 hover:bg-white text-purple-700 transition duration-300 p-6 rounded-2xl shadow-md text-center text-lg font-medium "
        >
          Hindi Alphabet <br /> <span className="text-sm "> हिंदी वर्णमाला </span> <br />
          <span className="text-sm "> হিন্দি বর্ণমালা </span> 
        </Link>
      </div>
    </div>
  );
};

export default Home;
