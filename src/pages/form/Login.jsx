import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const countries = [
  { name: "Bangladesh", dialCode: "+880" },
  { name: "India", dialCode: "+91" },
  { name: "Nepal", dialCode: "+977" },
  { name: "United Arab Emirates", dialCode: "+971" },
  { name: "Saudi Arabia", dialCode: "+966" },
  { name: "Qatar", dialCode: "+974" },
  { name: "Kuwait", dialCode: "+965" },
  { name: "Oman", dialCode: "+968" },
  { name: "Bahrain", dialCode: "+973" },
];

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      mobile: "",
      password: "",
      country: "Bangladesh",
    },
  });
  const navigate = useNavigate();
  const location = useLocation();
const from = location.state?.from?.pathname || "/";

  const selectedCountry = watch("country");
  const selectedCountryInfo = countries.find((c) => c.name === selectedCountry);

  const onSubmit = async (data) => {
    const dataWithDialCode = {
      mobile: `${selectedCountryInfo?.dialCode}${data.mobile}`, 
      password: data.password
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/login",
        dataWithDialCode
      );
      if (response.status === 200) {
        toast.success("Logged in Successfully !!");
        const { token, user } = response.data;
        localStorage.setItem("authToken", token);
        localStorage.setItem("user", JSON.stringify(user));
     
        setTimeout(() => navigate(from, { replace: true }), 1000);

      }
    } catch (error) {
      alert("Invalid credentials. Please try again.");
      console.error(error.response ? error.response.data : error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Country
          </label>
          <select
            {...register("country", { required: true })}
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">Country is required</p>
          )}
        </div>

        {/* Mobile */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Mobile No:
          </label>
          <div className="flex mt-1">
            <span className="px-3 py-2 bg-gray-100 border border-r-0 rounded-l-md text-sm text-gray-600">
              {selectedCountryInfo?.dialCode}
            </span>
            <input
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{7,12}$/,
                  message: "Enter 7 to 12 digit number",
                },
              })}
              type="number"
              className="border border-gray-300 border-l-0 p-2 w-full rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your mobile number"
            />
          </div>
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password:
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            type="password"
            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all duration-200"
        >
          Login
        </button>
        <div className="text-center my-4">
          New Here ?{" "}
          <Link to="/registration" className="text-blue-700">
            Register here
          </Link>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
}
