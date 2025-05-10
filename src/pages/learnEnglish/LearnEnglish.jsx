import React from "react";
import { Link } from "react-router-dom";

const LearnEnglish = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Link
          to="/englishvocabularies"
          className="block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md"
        >
          English Vocabularies
        </Link>
      </div>
      <div>
        <Link
          to="/englishsentences"
          className="block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md"
        >
          English Sentences
        </Link>
      </div>
    </div>
  );
};

export default LearnEnglish;
