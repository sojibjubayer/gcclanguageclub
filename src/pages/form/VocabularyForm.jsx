import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const VocabularyForm = () => {
  const [formData, setFormData] = useState({
    lessonType: "greetings",
    arabic: "",
    englishWord: "",
    hindiWord: "",
    bengaliWord: "",
    englishTransliteration: "",
    hindiTransliteration: "",
    bengaliTransliteration: "",
    englishBengaliTransliteration: "",
    englishHindiTransliteration: "",
    hindiBengaliTransliteration: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/vocabulary", formData);
      // alert("Vocabulary submitted successfully!");
      toast.success("Vocabulary submitted successfully!")
      setFormData({
        lessonType: "greetings",
        arabic: "",
        englishWord: "",
        hindiWord: "",
        bengaliWord: "",
        englishTransliteration: "",
        hindiTransliteration: "",
        bengaliTransliteration: "",
        englishBengaliTransliteration: "",
        englishHindiTransliteration: "",
        hindiBengaliTransliteration: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white border-2 border-purple-300 rounded-xl shadow-lg p-8 space-y-5"
      >
        <h2 className="text-3xl font-bold text-purple-700 text-center">Add Vocabulary</h2>

        {/* Lesson Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Lesson Type:</label>
          <select
            name="lessonType"
            value={formData.lessonType}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
          >
            <option value="greetings">Greetings</option>
            <option value="travelandnavigation">Travel & Navigation</option>
            <option value="foodanddining">Food and Dining</option>
            <option value="shoppingandcurrency">Shopping and Currency</option>
            <option value="numbersandcounting">Numbers and Counting</option>
            <option value="timeanddates">Time and Dates</option>
            <option value="weatherandseasons">Weather and Seasons</option>
          </select>
        </div>

        {/* Vocabulary Fields */}
        {[
          { label: "Arabic Word", name: "arabic" },
          { label: "English Word", name: "englishWord" },
          { label: "Hindi Word", name: "hindiWord" },
          { label: "Bengali Word", name: "bengaliWord" },
          { label: "English Transliteration", name: "englishTransliteration" },
          { label: "Hindi Transliteration", name: "hindiTransliteration" },
          { label: "Bengali Transliteration", name: "bengaliTransliteration" },
          { label: "English → Bengali Transliteration", name: "englishBengaliTransliteration" },
          { label: "English → Hindi Transliteration", name: "englishHindiTransliteration" },
          { label: "Hindi → Bengali Transliteration", name: "hindiBengaliTransliteration" }
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
            <input
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Submit Vocabulary
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default VocabularyForm;
