import { Link, NavLink } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 max-w-screen-xl bg-black bg-opacity-50 text-white font-medium px-5">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <div className="text-center flex flex-col gap-0 items-center">
            <p className="text-2xl tracking-widest uppercase font-bold">Boss</p>
            <p className="text-sm">Restaurant</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link>Sign in</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
