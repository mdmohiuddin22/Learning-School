

import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const handleLogIn = () => {
    // Your login logic here...
    // Assuming login was successful, show success message with SweetAlert
    Swal.fire({
      icon: "success",
      title: "Logged In",
      text: "You have successfully logged in!",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have successfully logged out!",
        });
      })
      .catch(error => console.log(error));
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navItems = (
    <>
      <li className="ml-10">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/instructors">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Classes</Link>
      </li>
      <li>
        <Link to="/dashboard/mycart">My Cart</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li className="ml-32 btn btn-success">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-green-400 sticky top-0 z-50">
      <div className="">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={toggleDropdown}
          >
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
          </label>
          {isDropdownOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          )}
        </div>
        <img
          className="h-20"
          src="https://i.ibb.co/1Xxrt3c/240-F-392804645-t-UQxo5-Eg-PXv-FGxn5-OQgu-X1-Bi-Yl-I6l-COV-removebg-preview-1.png"
          alt=""
        />
        <a className="btn btn-ghost normal-case text-xl font-bold text-amber-600">
          ARABIC LEARNING SCHOOL
        </a>
      </div>
      <div className="navbar-center hidden lg:flex text-lg font-semibold ml-56">
        <ul className="menu menu-horizontal px-1 ml-20">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        {user && (
          <>
            <img
              src="https://i.ibb.co/CMzNM8P/muslim-boy-learning-how-make-dua-allah-53876-25223.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </>
        )}
      </div>

      {/* Responsive Navbar */}
      <div className="lg:hidden block px-4 py-2 text-lg font-semibold">
        <ul className="menu menu-horizontal">
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


