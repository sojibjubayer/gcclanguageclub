import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const TypedSentences = () => {
  const [sentenceList, setSentenceList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  const { sentenceType } = useParams();

  useEffect(() => {
    if (!sentenceType) return;

    setLoading(true);
    setNoData(false);

    axios
      .get(`http://localhost:5000/api/sentences?sentenceType=${sentenceType}`)
      .then((response) => {
        if (response.data.length === 0) {
          setNoData(true);
        } else {
          setSentenceList(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching sentence items:", error);
        setNoData(true);
      })
      .finally(() => setLoading(false));
  }, [sentenceType]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          <span className="text-base font-medium text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  if (noData) {
    return (
      <div className="flex justify-center items-center min-h-screen px-4">
        <div className="text-center space-y-2">
          <p className="text-2xl font-bold text-gray-600">No data found</p>
          <p className="text-sm text-gray-500">Try another sentence type.</p>
        </div>
      </div>
    );
  }

  const item = sentenceList[currentIndex];

  return (
    <div className="p-4 md:p-6 bg-gradient-to-tr from-pink-50 via-blue-100 to-green-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-purple-800 mb-6 md:mb-10 drop-shadow-lg">
        {sentenceType.charAt(0).toUpperCase() + sentenceType.slice(1)} Sentences
      </h1>

      <div className="bg-white text-center p-4 md:p-6 w-full max-w-2xl rounded-3xl shadow-xl space-y-4 border border-purple-100">
        {/* Arabic Section */}
        <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-xl p-4 shadow">
          <p className="text-lg md:text-xl font-semibold text-green-800 mb-2">🕌 আরবিঃ</p>
          <p className="text-base md:text-xl font-bold text-gray-800">{item.arabicSentence}</p>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            <strong>উচ্চারণ:</strong> {item.arabic_bengaliTransliteration}
          </p>
        </div>

        {/* Hindi Section */}
        <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-xl p-4 shadow">
          <p className="text-lg md:text-xl font-semibold text-yellow-800 mb-2">🪔 হিন্দিঃ</p>
          <p className="text-base md:text-xl font-bold text-gray-800">{item.hindiSentence}</p>
          <p className="mt-2 text-sm md:text-base text-gray-700">
            <strong>উচ্চারণ:</strong> {item.hindi_bengaliTransliteration}
          </p>
        </div>

        {/* Bengali Section */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl p-4 shadow">
          <p className="text-lg md:text-xl font-semibold text-blue-800 mb-2">🏠 বাংলাঃ</p>
          <p className="text-base md:text-xl font-semibold text-gray-800">{item.bengaliSentence}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex sm:flex-row gap-4 w-full max-w-md justify-center">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-6 py-2 rounded-xl transition duration-200 disabled:opacity-50"
        >
          ◀ Previous
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              Math.min(prev + 1, sentenceList.length - 1)
            )
          }
          disabled={currentIndex === sentenceList.length - 1}
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-medium px-6 py-2 rounded-xl transition duration-200 disabled:opacity-50"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default TypedSentences;
