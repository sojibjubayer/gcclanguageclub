import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const VocabularyForm = () => {
  const initialFormState = {
    selectedLanguage: "arabic",
    word: "",
    transliteration: "",
    meaning: "",
    hindi: {
      transliteration: "",
      meaning: "",
    },
    bengali: {
      transliteration: "",
      meaning: "",
    },
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [field, subField] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [field]: {
          ...prevData[field],
          [subField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleLanguageChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedLanguage: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/vocabulary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        toast.success("Vocabulary added successfully!");
        setFormData(initialFormState); // Clear the form
        console.log("Form submitted successfully:", data);
      } else {
        toast.error("Failed to submit vocabulary.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred during submission.");
    }
  };
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Add Vocabulary</h2>

        <form onSubmit={handleSubmit}>
          {/* Language Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Select Language:</label>
            <select
              name="selectedLanguage"
              value={formData.selectedLanguage}
              onChange={handleLanguageChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            >
              <option value="arabic">Arabic</option>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="bengali">Bengali</option>
            </select>
          </div>

          {/* Word */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Word:</label>
            <input
              type="text"
              name="word"
              value={formData.word}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Transliteration */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Transliteration:</label>
            <input
              type="text"
              name="transliteration"
              value={formData.transliteration}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Meaning */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Meaning:</label>
            <input
              type="text"
              name="meaning"
              value={formData.meaning}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Hindi Transliteration and Meaning */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Hindi Transliteration:</label>
            <input
              type="text"
              name="hindi.transliteration"
              value={formData.hindi.transliteration}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Hindi Meaning:</label>
            <input
              type="text"
              name="hindi.meaning"
              value={formData.hindi.meaning}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Bengali Transliteration and Meaning */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Bengali Transliteration:</label>
            <input
              type="text"
              name="bengali.transliteration"
              value={formData.bengali.transliteration}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Bengali Meaning:</label>
            <input
              type="text"
              name="bengali.meaning"
              value={formData.bengali.meaning}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Vocabulary
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default VocabularyForm;
