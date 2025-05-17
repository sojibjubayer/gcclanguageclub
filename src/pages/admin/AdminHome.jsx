import { Link } from "react-router-dom";

const AdminHome = () => {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50 px-4">
            <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 space-y-6 text-center">
                <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
                <nav className="space-y-4">
                    <Link 
                        to="/admin/addvocabulary" 
                        className="block w-full bg-cyan-500 text-white font-medium py-2 rounded-md hover:bg-cyan-600 transition"
                    >
                        Add Vocabulary
                    </Link>
                    <Link 
                        to="/admin/managevocabulary" 
                        className="block w-full bg-cyan-500 text-white font-medium py-2 rounded-md hover:bg-cyan-600 transition"
                    >
                        Manage Vocabulary
                    </Link>
                    <Link 
                        to="/admin/manageusers" 
                        className="block w-full bg-cyan-500 text-white font-medium py-2 rounded-md hover:bg-cyan-600 transition"
                    >
                        Manage Users
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default AdminHome;
