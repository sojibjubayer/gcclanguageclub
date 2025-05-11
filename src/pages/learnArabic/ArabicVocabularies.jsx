import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import axios from "axios";
import { useParams } from "react-router-dom";

const ArabicVocabularies = () => {
  const [vocabularyList, setVocabularyList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { lessonType } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vocabulary")
      .then((response) => {
        setVocabularyList(
          response.data.filter((item) => item.lessonType === lessonType)
        );
      })
      .catch((error) => {
        console.error("Error fetching vocabulary items:", error);
      });
  }, [lessonType]);
 
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

  if (vocabularyList.length === 0) {
    return (
      <div className="flex justify-center items-center space-x-2 min-h-screen">
        <div className="w-8 h-8 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <span>Loading...</span>
      </div>
    );
  }
  

  const item = vocabularyList[currentIndex];

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">
        Arabic Vocabulary
      </h1>

      <div className="bg-white p-4 w-[98%] md:w-[80%] rounded-2xl shadow-md border border-purple-200  max-w-2xl space-y-6 text-center">
        {/* Arabic Section */}
        <div>
          <p className="text-gray-500 font-semibold mb-1">Arabic (العربية):</p>
          <div className="text-3xl flex justify-center items-center gap-2 mb-4">
            {item.arabic}
            <button
              className="text-purple-600 hover:text-purple-800"
              onClick={() =>
                playPronunciation(item.englishTransliteration, "ar-EG")
              }
              aria-label="Play Arabic Word"
            >
              <FaPlay />
            </button>
          </div>

          <p className="text-gray-500 font-semibold mb-1">
            Transliteration | उच्चारण | উচ্চারণ
          </p>
          <hr className="pb-2" />

          <p className="flex justify-center items-center gap-2 text-sm mb-2">
            <strong>Transliteration:</strong> {item.englishTransliteration}
          </p>

          <p className="flex justify-center items-center gap-2 text-sm mb-2">
            <strong>उच्चारण (Hindi):</strong> {item.hindiTransliteration}
            <button
              className="text-green-500 hover:text-green-700"
              onClick={() =>
                playPronunciation(item.hindiTransliteration, "hi-IN")
              }
              aria-label="Play Hindi Transliteration"
            >
              <FaPlay />
            </button>
          </p>

          <p className="flex justify-center items-center gap-2 text-sm">
            <strong>উচ্চারণ (Bengali):</strong> {item.bengaliTransliteration}
          </p>
        </div>

        {/* Meanings Section */}
        <div>
          <p className="text-gray-500 font-semibold mb-1">
            Meaning | अर्थ | অর্থ
          </p>
          <hr className="pb-2" />

          <p className="flex justify-center items-center gap-2 text-sm mb-2">
            <strong>In English:</strong> {item.englishWord}
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => playPronunciation(item.englishWord, "en-US")}
              aria-label="Play English Meaning"
            >
              <FaPlay />
            </button>
          </p>

          <p className="flex justify-center items-center gap-2 text-sm mb-2">
            <strong>In Hindi (हिंदी):</strong> {item.hindiWord}
            <button
              className="text-green-500 hover:text-green-700"
              onClick={() => playPronunciation(item.hindiWord, "hi-IN")}
              aria-label="Play Hindi Meaning"
            >
              <FaPlay />
            </button>
          </p>

          <p className="flex justify-center items-center gap-2 text-sm">
            <strong>In Bangla (বাংলা):</strong> {item.bengaliWord}
          
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-6 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentIndex((prev) =>
              Math.min(prev + 1, vocabularyList.length - 1)
            )
          }
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
