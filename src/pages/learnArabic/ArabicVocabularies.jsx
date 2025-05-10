import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import axios from "axios";

const ArabicVocabularies = () => {
  const [vocabularyList, setVocabularyList] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/vocabulary")
      .then((response) => {
        setVocabularyList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching vocabulary items:", error);
      });
  }, []);
  // console.log(vocabularyList)

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

  if (vocabularyList.length === 0) return <div className="p-6">Loading...</div>;

return (
  <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
    <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Arabic Vocabularies</h1>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {vocabularyList?.map((item) => (
        <div
          key={item._id}
          className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-purple-100"
        >
          {/* Top Word + Play */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">{item.word}</h2>
            <button
              className="text-purple-600 hover:text-purple-800 transition"
              onClick={() => playPronunciation(item.transliteration, "ar-AE")}
              aria-label={`Play pronunciation of Arabic: ${item.word}`}
            >
              <FaPlay className="text-xl" />
            </button>
          </div>

          {/* Transliteration & Meaning */}
          <div className="text-gray-700 mb-4">
            <p className="mb-2">
              <span className="font-medium text-gray-500">Transliteration:</span>{" "}
              {item.transliteration}
            </p>
            <p>
              <span className="font-medium text-gray-500">Meaning:</span> {item.meaning}
            </p>
          </div>

          {/* Divider */}
          <hr className="my-4" />

          {/* Hindi */}
          <div className="mb-4">
            <p className="text-gray-500 font-semibold mb-1">Hindi (हिंदी):</p>
            <div className="flex justify-between text-sm">
              <div>
                <p><strong>उच्चारण:</strong> {item.hindi?.transliteration}</p>
                <p><strong>अर्थ:</strong> {item.hindi?.meaning}</p>
              </div>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => playPronunciation(item.hindi?.transliteration, "hi-IN")}
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
                <p><strong>উচ্চারণ:</strong> {item.bengali?.transliteration}</p>
                <p><strong>অর্থ:</strong> {item.bengali?.meaning}</p>
              </div>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => playPronunciation(item.bengali?.transliteration, "bn-BD")}
                aria-label="Play Bengali"
              >
                <FaPlay className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

};

export default ArabicVocabularies;
