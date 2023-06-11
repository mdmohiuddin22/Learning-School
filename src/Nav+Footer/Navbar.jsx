
const Navbar = () => {
    return (
        <div className="navbar bg-green-400 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl font-bold ">ARABIC  LEARNING    SCHOOL</a>
        </div>
        <div className="navbar-center hidden lg:flex text-lg font-semibold">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Instructors</a></li>
            <li><a>Classes</a></li>
            <li><a>Dashboard</a></li>
            <li><a>Login</a></li>
          </ul>
        </div>

      </div>
    );
};

export default Navbar;