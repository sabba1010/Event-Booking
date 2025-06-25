import React, { useContext } from 'react';
import { AuthContext } from "../provider/AuthProvider";
import { Link } from 'react-router-dom'; // top e import koro


const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-md text-center space-y-6 transform transition duration-500 hover:scale-105">
        <div className="relative w-32 h-32 mx-auto">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User Profile"
              className="w-full h-full rounded-full border-4 border-primary object-cover shadow-lg"
            />
          ) : (
            <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center text-4xl font-bold text-white shadow-lg">
              ?
            </div>
          )}
          <div className="absolute bottom-0 right-0 bg-green-500 w-5 h-5 rounded-full border-2 border-white animate-ping"></div>
        </div>

        <h2 className="text-3xl font-extrabold text-gray-800">
          {user?.displayName || 'No Name'}
        </h2>
        <p className="text-gray-600 text-lg font-medium">
          {user?.email || 'No Email Provided'}
        </p>
        <div className="border-t pt-4">
          <p className="text-sm text-gray-500">Welcome to your profile dashboard.</p>
          <p className="text-xs text-gray-400 mt-1">Last Login: {new Date().toLocaleDateString()}</p>
        </div>
     

<Link to="/edit-profile">
  <button className="bg-primary text-white px-6 py-2 rounded-full shadow hover:bg-primary/90 transition duration-300">
    Edit Profile
  </button>
</Link>

      </div>
    </div>
  );
};

export default Profile;
