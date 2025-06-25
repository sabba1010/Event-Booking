import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi"; // 👈 Eye icons

const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);

    signIn(email, password)
      .then(() => {
        toast.success("Login successful!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Incorrect email or password. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const handleGoogle = () => {
    setGoogleLoading(true);
    googleLogin()
      .then(() => {
        toast.success("Google login successful!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google login failed. Please try again.");
      })
      .finally(() => setGoogleLoading(false));
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleLogin} className="card bg-base-100 shadow-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        {/* Email input */}
        <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-2" required />

        {/* Password input with eye toggle */}
        <div className="relative mb-2">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full pr-10"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        {/* Login button */}
        <button type="submit" className="btn btn-primary w-full mt-2" disabled={loading}>
          {loading ? "Logging In..." : "Login"}
        </button>

        {/* Google login button */}
        <button onClick={handleGoogle} type="button" className="btn btn-outline w-full mt-2" disabled={googleLoading}>
          {googleLoading ? "Logging In..." : "Continue with Google"}
        </button>

        {/* Register redirect */}
        <p className="mt-3 text-center">
          New here? <Link to="/auth/register" className="text-blue-600">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
