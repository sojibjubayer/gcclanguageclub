import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
const [selectedUserId, setSelectedUserId] = useState(null);


  useEffect(() => {
    axios
      .get('http://localhost:5000/api/getusers')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  const handleRoleChange = (userId, currentRole) => {
    const newRole = currentRole === 'admin' ? 'user' : 'admin';

    axios
      .put(`http://localhost:5000/api/users/${userId}/role`, { role: newRole })
      .then(() => {
        setUsers(prevUsers =>
          prevUsers.map(user =>
            user._id === userId ? { ...user, role: newRole } : user
          )
        );
      })
      .catch(error => {
        console.error('Error updating user role:', error);
      });
  };

  const handleDeleteClick = (userId) => {
  setSelectedUserId(userId);
  setShowConfirm(true);
};

const confirmDeleteUser = () => {
  axios
    .delete(`http://localhost:5000/api/deleteuser/${selectedUserId}`)
    .then(() => {
      setUsers(prevUsers => prevUsers.filter(user => user._id !== selectedUserId));
      setShowConfirm(false);
      setSelectedUserId(null);
    })
    .catch(error => {
      console.error('Error deleting user:', error);
      setShowConfirm(false);
      setSelectedUserId(null);
    });
};


  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4 text-center">Manage Users</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-cyan-500 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Country</th>
              <th className="py-2 px-4 text-left">Mobile</th>
              <th className="py-2 px-4 text-left w-[100px]">Role</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.country}</td>
                <td className="py-2 px-4">{user.mobile}</td>
                <td className="py-2 px-4 capitalize">{user.role}</td>
                <td className="py-2 px-4 space-y-2 space-x-0 sm:space-x-2 sm:space-y-0 sm:flex">
                  <button
                    onClick={() => handleRoleChange(user._id, user.role)}
                    className="w-[120px] bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    {user.role === 'admin' ? 'Make User' : 'Make Admin'}
                  </button>
                  <button
                    onClick={() => handleDeleteClick(user._id)}
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
      {showConfirm && (
  <div className="fixed inset-0 flex items-center justify-center  bg-opacity-30 z-50">
    <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
      <h3 className="text-lg font-semibold mb-4">Confirm Deletion</h3>
      <p className="mb-6">Are you sure you want to delete this user?</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={confirmDeleteUser}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Yes, Delete
        </button>
        <button
          onClick={() => setShowConfirm(false)}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default ManageUsers;
