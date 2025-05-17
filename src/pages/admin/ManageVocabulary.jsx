import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageVocabulary = () => {
  const [vocabularyList, setVocabularyList] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({});
  const [showEditForm, setShowEditForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVocabulary();
  }, []);

  const fetchVocabulary = () => {
    axios
      .get("http://localhost:5000/api/managevocabulary")
      .then((res) => {
        setVocabularyList(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vocabulary:", err);
        setLoading(false);
      });
  };
  

  const handleEditClick = (item) => {
    setEditItem(item);
    setFormData(item);
    setShowEditForm(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    axios
      .delete(`http://localhost:5000/api/deletevocabulary/${deleteId}`)
      .then(() => {
        setVocabularyList((prev) =>
          prev.filter((item) => item._id !== deleteId)
        );
        setShowDeleteModal(false);
        setDeleteId(null);
      })
      .catch((err) => console.error("Delete error:", err));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/api/updatevocabulary/${editItem._id}`,
        formData
      )
      .then(() => {
        fetchVocabulary();
        setShowEditForm(false);
        setEditItem(null);
      })
      .catch((err) => console.error("Update failed:", err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
   if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
        Manage Vocabulary
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead className="bg-purple-600 text-white">
            <tr>
              <th className="px-4 py-2">Lesson</th>
              <th className="px-4 py-2">Arabic</th>
              <th className="px-4 py-2">English</th>
              <th className="px-4 py-2">Hindi</th>
              <th className="px-4 py-2">Bengali</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vocabularyList.map((item) => (
              <tr
                key={item._id}
                className="border-b hover:bg-gray-50 text-center"
              >
                <td className="px-4 py-2">{item.lessonType}</td>
                <td className="px-4 py-2">{item.arabic}</td>
                <td className="px-4 py-2">{item.englishWord}</td>
                <td className="px-4 py-2">{item.hindiWord}</td>
                <td className="px-4 py-2">{item.bengaliWord}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    onClick={() => handleEditClick(item)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Form Modal */}
      {showEditForm && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">
              Edit Vocabulary
            </h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block font-medium">Lesson Type</label>
                <select
                  name="lessonType"
                  value={formData.lessonType}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="greetings">Greetings</option>
                  <option value="travelandnavigation">
                    Travel & Navigation
                  </option>
                  <option value="foodanddining">Food and Dining</option>
                  <option value="shoppingandcurrency">
                    Shopping and Currency
                  </option>
                  <option value="numbersandcounting">
                    Numbers and Counting
                  </option>
                  <option value="timeanddates">Time and Dates</option>
                  <option value="weatherandseasons">Weather and Seasons</option>
                </select>
              </div>

              {[
                "arabic",
                "englishWord",
                "hindiWord",
                "bengaliWord",
                "englishTransliteration",
                "hindiTransliteration",
                "bengaliTransliteration",
                "englishBengaliTransliteration",
                "englishHindiTransliteration",
                "hindiBengaliTransliteration",
              ].map((field) => (
                <div key={field}>
                  <label className="block font-medium capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={formData[field] || ""}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              ))}

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowEditForm(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0  bg-black/70 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <h3 className="text-xl font-bold text-red-600 mb-4">
              Confirm Deletion
            </h3>
            <p className="mb-6 text-gray-700">
              Are you sure you want to delete this vocabulary item? This action
              cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteId(null);
                }}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageVocabulary;
