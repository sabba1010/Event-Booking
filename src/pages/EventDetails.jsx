import React, { useState } from 'react';
import { NavLink, useLoaderData, useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EventDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const navigate = useNavigate();

  const singleEvent = data.find(event => event.id === id || event.id === parseInt(id));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Reservation Successful!',
      text: 'Your seat has been successfully reserved!',
      icon: 'success',
      confirmButtonText: 'Go to Home'
    }).then(() => {
      navigate('/');
    });

    setName('');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#fff] to-[#e0f2f1] p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Event Details</h1>

        {singleEvent ? (
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 flex flex-col lg:flex-row gap-10 transition-all duration-300">
            
            {/* Fancy Thumbnail */}
            <div className="relative group w-full lg:max-w-md overflow-hidden rounded-2xl shadow-xl border border-gray-300">
              <img
                src={singleEvent.thumbnail}
                alt={singleEvent.name}
                className="object-cover w-full h-full transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h2 className="text-xl font-bold">{singleEvent.name}</h2>
              </div>
            </div>

            {/* Event Info & Form */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-4 text-gray-900">{singleEvent.name}</h1>
              <p className="text-gray-700 mb-4">{singleEvent.description}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800">
                <p><span className="font-semibold">Category:</span> {singleEvent.category}</p>
                <p><span className="font-semibold">Date:</span> {singleEvent.date}</p>
                <p><span className="font-semibold">Location:</span> {singleEvent.location}</p>
                <p><span className="font-semibold">Entry Fee:</span> {singleEvent.entry_fee}</p>
              </div>

              <div className="mt-6">
                <NavLink to="/" className="inline-block px-6 py-2 font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow hover:scale-105 transition-transform">
                  Go Back Home
                </NavLink>
              </div>

              {/* Form */}
              <form onSubmit={handleFormSubmit} className="mt-8 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all shadow-md"
                >
                  Reserve Seat
                </button>
              </form>
            </div>
          </div>
        ) : (
          <p className="text-red-500 text-center text-xl font-semibold mt-10">Event not found.</p>
        )}
      </div>
    </div>
  );
};

export default EventDetails;
