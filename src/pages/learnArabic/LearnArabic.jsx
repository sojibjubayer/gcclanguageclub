import React from "react";
import { Link } from "react-router-dom";

const LearnArabic = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Arabic Vocabularies - Blue background */}
        <Link
          to="/arabiclessons"
          className="block text-center bg-blue-100 hover:bg-blue-200 shadow-md rounded-xl px-6 py-8 transition duration-300"
        >
          <h2 className="text-lg font-semibold text-gray-800">Arabic Vocabularies</h2>
          <p className="text-sm text-gray-600 mt-2">अरबी शब्दावली</p>
          <p className="text-sm text-gray-600">আরবী শব্দভান্ডার</p>
        </Link>

        {/* Arabic Sentences - Green background */}
        <Link
          to="/arabicsentences"
          className="block text-center bg-green-100 hover:bg-green-200 shadow-md rounded-xl px-6 py-8 transition duration-300"
        >
          <h2 className="text-lg font-semibold text-gray-800">Arabic Sentences</h2>
          <p className="text-sm text-gray-600 mt-2">अरबी वाक्य</p>
          <p className="text-sm text-gray-600">আরবী বাক্য</p>
        </Link>
      </div>
    </div>
  );
};

export default LearnArabic;
