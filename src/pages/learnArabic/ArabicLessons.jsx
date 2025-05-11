import React from 'react';
import { useNavigate } from 'react-router-dom';

const lessonTypes = [
  { value: "greetings", label: "Greetings" },
  { value: "travelandnavigation", label: "Travel & Navigation" },
  { value: "foodanddining", label: "Food and Dining" },
  { value: "shoppingandcurrency", label: "Shopping and Currency" },
  { value: "numbersandcounting", label: "Numbers and Counting" },
  { value: "timeanddates", label: "Time and Dates" },
  { value: "weatherandseasons", label: "Weather and Seasons" },
];

const ArabicLessons = () => {
  const navigate = useNavigate();

  const handleStart = (type) => {
    navigate(`/lesson/${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <h1 className="text-4xl font-bold text-center text-purple-700 mb-10">Arabic Lessons</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {lessonTypes.map((lesson) => (
          <div
            key={lesson.value}
            className="bg-white p-6 rounded-2xl shadow-md border border-purple-200 text-center"
          >
            <h2 className="text-xl font-semibold text-purple-700 mb-4">{lesson.label}</h2>
            <button
              onClick={() => handleStart(lesson.value)}
              className="px-5 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
            >
              Start Lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArabicLessons;

