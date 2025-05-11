import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";

const ArabicVocabularies = () => {
  const [vocabularyList, setVocabularyList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {lessonType} = useParams()
  // console.log(lessonType)

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vocabulary")
      .then((response) => {
        setVocabularyList(response.data.filter(item=>item.lessonType===lessonType));
      })
      .catch((error) => {
        console.error("Error fetching vocabulary items:", error);
      });
  }, []);

  const playPronunciation = (text, lang) => {
    if (!("speechSynthesis" in window)) {
      alert("Speech Synthesis is not supported in your browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.7;
    utterance.pitch = 1;
    utterance.volume = 1;
    speechSynthesis.speak(utterance);
  };

  if (vocabularyList.length === 0) return <div className="flex justify-center items-center space-x-2 min-h-screen">
    <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
    <span>Loading...</span>
  </div>

  const item = vocabularyList[currentIndex];

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Arabic Vocabulary</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md border border-purple-200 w-full max-w-2xl">
        {/* Top Word + Play */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">{item.arabic}</h2>
          <button
            className="text-purple-600 hover:text-purple-800 transition"
            onClick={() => playPronunciation(item.englishTransliteration, "ar-AE")}
            aria-label={`Play pronunciation of Arabic: ${item.arabic}`}
          >
            <FaPlay className="text-xl" />
          </button>
        </div>

        <div className="text-gray-700 mb-4">
          <p className="mb-2">
            <span className="font-medium text-gray-500">Transliteration:</span>{" "}
            {item.englishTransliteration}
          </p>
          <p>
            <span className="font-medium text-gray-500">Meaning:</span> {item.englishWord}
          </p>
        </div>

        <hr className="my-4" />

        {/* Hindi */}
        <div className="mb-4">
          <p className="text-gray-500 font-semibold mb-1">Hindi (हिंदी):</p>
          <div className="flex justify-between text-sm">
            <div>
              <p><strong>उच्चारण:</strong> {item.hindiTransliteration}</p>
              <p><strong>अर्थ:</strong> {item.hindiWord}</p>
            </div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => playPronunciation(item.hindiTransliteration, "hi-IN")}
              aria-label="Play Hindi"
            >
              <FaPlay className="text-lg" />
            </button>
          </div>
        </div>

        {/* Bengali */}
        <div>
          <p className="text-gray-500 font-semibold mb-1">বাংলা:</p>
          <div className="flex justify-between text-sm">
            <div>
              <p><strong>উচ্চারণ:</strong> {item.bengaliTransliteration}</p>
              <p><strong>অর্থ:</strong> {item.bengaliWord}</p>
            </div>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => playPronunciation(item.bengaliTransliteration, "bn-BD")}
              aria-label="Play Bengali"
            >
              <FaPlay className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-6 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, vocabularyList.length - 1))}
          disabled={currentIndex === vocabularyList.length - 1}
          className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ArabicVocabularies;
