/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function LoginNavbar() {
  // get the active Route path
  let isLoginPage = useLocation().pathname === "/login" ? true : false;
  let isRegisterPage = useLocation().pathname === "/register" ? true : false;

  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  function handleSetMobileNavOpen() {
    setMobileNavOpen(!isMobileNavOpen);
  }

  // if the active Route path is Login, then disable Navbar
  return isLoginPage || isRegisterPage ? (
    <></>
  ) : (
    <nav className="w-full z-50 bg-white shadow-md">
      {/* <!-- container --> */}
      <div className="container mx-auto flex flex-wrap justify-between items-center md:px-4 px-1 py-3 lg:space-x-4">
        <div className="flex md:gap-7">
          {/* <!-- brand --> */}
          <Link to={`/`}>
            <img
              className="hidden lg:inline-block"
              src="/images/logo.svg"
              alt="Logo"
            />
          </Link>
          <div className="relative">
            <input
              name="search"
              className="px-5 py-1 bg-gray-200 lg:w-96 h-full rounded-lg focus:outline-none"
              placeholder="Cari disini .."
            />
            <span className="absolute inset-y-0 right-4 flex items-center">
              <img src="/icons/fi_search.svg" alt="search" />
              {/* <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> */}
            </span>
          </div>
        </div>

        {/* <!-- toggler btn --> */}
        <button
          onClick={handleSetMobileNavOpen}
          className="inline-flex items-center justify-center w-10 h-10 ml-auto border rounded-md outline-none lg:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* <!-- toggler btn --> */}

        {/* <!-- menu --> */}
        <div
          className={`font-medium w-full mt-2 lg:inline-flex lg:w-auto lg:mt-0 ${
            isMobileNavOpen ? "flex" : "hidden"
          }`}
        >
          <ul className="flex flex-col w-full space-y-2 lg:w-auto lg:flex-row lg:gap-5 lg:items-center lg:space-y-0 lg:space-x-2">
            <li>
              <Link to="login">
                <button className="flex items-center gap-2 bg-primaryPurple rounded-lg h-10 py-2 px-3 text-white text-sm">
                  <img src="/icons/fi_log-in.svg" alt="login" /> Masuk
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* // <!-- menu --> */}
      </div>
      {/* // <!-- container --> */}
    </nav>
  );
}
