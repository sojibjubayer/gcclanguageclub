import React from "react";
import { Link } from "react-router-dom";

const LearnHindi = () => {
  return (
    <div className="min-h-screen">
      <div>
        <Link
          to="/hindivocabularies"
          className="block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md"
        >
          Hindi Vocabularies
        </Link>
      </div>
      <div>
        <Link
          to="/hindisentences"
          className="block text-center md:w-[30%] mx-auto bg-amber-100 p-2 py-6 m-3 rounded-md"
        >
          Hindi Sentences
        </Link>
      </div>
    </div>
  );
};

export default LearnHindi;
