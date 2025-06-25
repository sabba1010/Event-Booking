import React, { useState } from "react";
import Swal from "sweetalert2"; 
import { useNavigate } from "react-router-dom"; 

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !email) {
      setError("Please fill in both fields.");
      return;
    }
    setError(""); 

    Swal.fire({
      title: "Your question has been submitted!",
      text: "We will get back to you shortly.",
      icon: "success",
      confirmButtonText: "Great!",
      customClass: {
        confirmButton: "btn-sweet"
      },
    }).then(() => {
      navigate("/"); 
    });

    console.log("Question Submitted:", question);
    console.log("Email:", email);
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-xl rounded-lg transform hover:scale-105 transition duration-500 ease-in-out">
      <h2 className="text-4xl font-semibold text-center text-indigo-600 mb-6">
        Ask a Question
      </h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-md transition duration-300 ease-in-out"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-8">
          <label
            htmlFor="question"
            className="block text-lg font-medium text-gray-700"
          >
            Your Question
          </label>
          <textarea
            id="question"
            placeholder="Type your question here"
            rows="4"
            className="w-full p-4 mt-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-md transition duration-300 ease-in-out"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-lg rounded-lg hover:from-indigo-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300"
        >
          Submit Question
        </button>
      </form>
    </div>
  );
};

export default AskQuestion;
