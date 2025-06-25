import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Register = () => {
  const { createUser, setUser, updateUser, googleLogin } = useContext(AuthContext);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility
  const navigate = useNavigate();

  const isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setNameError("");
    setEmailError("");
    setPasswordError("");

    if (name.length < 5) {
      return setNameError("Name must be more than 5 characters.");
    }

    if (!isValidEmail(email)) {
      return setEmailError("Please enter a valid email.");
    }

    if (!isValidPassword(password)) {
      return setPasswordError("Password must have 1 uppercase, 1 lowercase & be 6+ characters.");
    }

    setLoading(true);

    createUser(email, password)
      .then((result) => {
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...result.user, displayName: name, photoURL: photo });

            Swal.fire({
              title: 'Registration Successful!',
              text: 'You have been registered successfully!',
              icon: 'success',
              confirmButtonText: 'OK'
            });

            navigate("/");
          });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      })
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          title: 'Google Login Successful!',
          text: 'You have logged in with Google!',
          icon: 'success',
          confirmButtonText: 'OK'
        });

        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: 'Try Again'
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleRegister} className="card bg-base-100 shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Register</h2>
        
        <input name="name" type="text" placeholder="Name" className="input input-bordered w-full mb-2" required />
        {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
        
        <input name="photo" type="text" placeholder="Photo URL (Optional)" className="input input-bordered w-full mb-2" />
        
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-2" required />
        {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        
        <div className="relative mb-2">
          <input
            name="password"
            type={passwordVisible ? "text" : "password"} // Toggle between text and password type
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setPasswordVisible(!passwordVisible)} // Toggle the password visibility
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />} {/* Display eye icon */}
          </span>
        </div>
        {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}

        <button type="submit" className="btn btn-primary w-full mt-2" disabled={loading}>
          {loading ? "Loading..." : "Register"}
        </button>
        
        <button onClick={handleGoogle} type="button" className="btn btn-outline w-full mt-2">
          Google Login
        </button>
        
        <p className="mt-3 text-center">Already have an account? <Link to="/auth/login" className="text-blue-600">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
