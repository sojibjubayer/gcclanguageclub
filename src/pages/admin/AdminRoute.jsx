import {jwtDecode} from "jwt-decode"; 
import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [loading,setLoading]=useState(true);
  const [role, setRole] = useState(null); 
  const token = localStorage.getItem("authToken");
  const location = useLocation();

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role); 
        setLoading(false);
      } catch (error) {
        console.error("Error decoding token:", error);
        setRole(null); 
      }
    } else {
      setRole(null); 
    }
  }, [token]);
  console.log(role)

 
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  

 
  if (role === null || loading) {
    return <div>Loading...</div>;
  }

  if (role === "user") {
    return <Navigate to="/" />;
  }
  if (role === "admin") {
    return children;
  }

  


  return <Navigate to="/unauthorized" />;
};

export default AdminRoute;
