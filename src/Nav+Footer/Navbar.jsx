



import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => console.log(error));
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
        <Link to="classes">Classes</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="dashboard">Dashboard</Link>
          </li>
          <li>
            <button onClick={handleLogOut} className="btn btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li className="ml-32 btn btn-success ">
          <Link to="login">Login</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-green-400 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <img className="h-20" src="https://i.ibb.co/1Xxrt3c/240-F-392804645-t-UQxo5-Eg-PXv-FGxn5-OQgu-X1-Bi-Yl-I6l-COV-removebg-preview-1.png" alt="" />
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
        {user ? (
          <>
            
            <img
              src="https://i.ibb.co/CMzNM8P/muslim-boy-learning-how-make-dua-allah-53876-25223.jpg"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;




