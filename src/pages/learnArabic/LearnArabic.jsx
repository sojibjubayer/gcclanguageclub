import React from "react";
import { Link } from "react-router-dom";

const LearnArabic = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div>
          <Link
            to="/arabicvocabularies"
            className="block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md"
          >
            Arabic Vocabularies <br />
            अरबी शब्दावली <br />
            আরবী শব্দভান্ডার 

          </Link>
        </div>
        <div>
          <Link
            to="/arabicsentences"
            className="block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md"
          >
            Arabic Sentences <br />
            अरबी वाक्य  <br />
            আরবী বাক্য 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LearnArabic;
