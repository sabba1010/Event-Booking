import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const navLinkClass = ({ isActive }) =>
    isActive ? 'text-primary font-bold border-b-2 border-primary' : 'hover:text-primary';

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={navLinkClass}>
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/companyDetails" className={navLinkClass}>
          Details
        </NavLink>
      </li>
      <li>
        <NavLink to="/askqus" className={navLinkClass}>
        FAQ
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate('/auth/login');
      })
      .catch((error) => {
        console.error('Logout failed:', error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Dream Events Ltd.</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-5 font-semibold">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div
                className="w-10 rounded-full tooltip"
                data-tip={user.displayName || "User"}
              >
                <img
                  src={user.photoURL || "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}
                  alt="Profile"
                />
              </div>
            </div>
            <button onClick={handleLogout} className="btn btn-outline btn-primary">Logout</button>
          </div>
        ) : (
          <NavLink to="/auth/login" className="btn">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Nav;
