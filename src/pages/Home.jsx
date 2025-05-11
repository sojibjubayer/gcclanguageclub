import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-10 text-center">Start Learning Languages</h1>

      <div className="grid gap-6 w-full max-w-md">
        <Link
          to="/learnarabic"
          className="bg-amber-100 hover:bg-white hover:text-purple-700 transition duration-300 p-6 rounded-2xl shadow-md text-center text-lg font-medium text-gray-800"
        >
          Learn Arabic <br /> <span className="text-sm ">अरबी सीखें</span> <br />
          <span className="text-sm ">আরবি শিখুন</span>
        </Link>

        <Link
          to="/learnenglish"
          className="bg-amber-100 hover:bg-white hover:text-purple-700 transition duration-300 p-6 rounded-2xl shadow-md text-center text-lg font-medium text-gray-800"
        >
          Learn English <br /> <span className="text-sm ">अंग्रेज़ी सीखें</span> <br />
          <span className="text-sm ">ইংরেজি শিখুন</span>
        </Link>

        <Link
          to="/learnhindi"
          className="bg-amber-100 hover:bg-white hover:text-purple-700 transition duration-300 p-6 rounded-2xl shadow-md text-center text-lg font-medium text-gray-800"
        >
          Learn Hindi <br /> <span className="text-sm ">हिंदी सीखें</span> <br />
          <span className="text-sm ">হিন্দি শিখুন</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
