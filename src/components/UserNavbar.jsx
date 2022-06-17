import { Link, useLocation } from "react-router-dom";
import NotificationDropdown from "../components/NotificationDropdown";

export default function UserNavbar() {
  // get the active Route path
  let isLoginPage = useLocation().pathname === "/login" ? true : false;
  let isRegisterPage = useLocation().pathname === "/register" ? true : false;

  return isLoginPage || isRegisterPage ? (
    <></>
  ) : (
    <nav className="w-full z-50 bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4 py-3">
        <div className="flex md:gap-7">
          {/* <!-- LOGO --> */}
          <Link to={`/`}>
            <img src="/images/logo.svg" alt="Logo" />
          </Link>

          {/* <!-- SEARCH --> */}
          <div className="relative hidden lg:inline-block">
            <input
              name="search"
              className="px-5 py-1 bg-gray-200 lg:w-96 h-full rounded-lg focus:outline-none"
              placeholder="Cari disini .."
            />
            <span className="absolute inset-y-0 right-4 flex items-center">
              <img src="/icons/fi_search.svg" alt="search" />
            </span>
          </div>
        </div>

        <div className="flex gap-4 lg:gap-7 h-6">
          <Link to="offer">
            <button className="">
              <img src="/icons/fi_list.svg" alt="list" />
            </button>
          </Link>
          <NotificationDropdown />
          <Link to="profile">
            <button className="">
              <img src="/icons/fi_user.svg" alt="user" />
            </button>
          </Link>
          <Link to="login">
            <button className="">
              <img src="/icons/iconlogout.svg" alt="logout" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
