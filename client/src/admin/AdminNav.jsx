import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import { adminLogout } from "../store/adminSlice";

const AdminNavbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isAdminLoggedIn, admin } = useSelector((state) => state.adminAuth);

  useEffect(() => {
    if (isAdminLoggedIn === true) {
      const checkLocalCookie = async () => {
        const cookies = document.cookie.split("; ");
        const cookieName = "adminVerify";
        const exists = cookies.some((cookie) =>
          cookie.startsWith(`${cookieName}=`)
        );
        if (!exists) {
          dispatch(adminLogout());
          navigate("/admin/login");
        }
      };
      checkLocalCookie();
    } else {
      // navigate('/admin/login')
    }
  }, [isAdminLoggedIn, admin, dispatch, navigate]);

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      {/* Desktop sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-900 h-screen fixed">
        <div className="flex items-center justify-between px-4 py-4 border-b dark:border-gray-700">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            <img src="/logo192.png" alt="" className="w-8 rounded-full" />
          </span>
        </div>
        <nav className="flex-grow px-4 py-6">
          <NavLink to="/admin" className="flex mb-3 items-center text-blue-600">
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/projects"
            className="flex mb-3 items-center text-blue-600"
          >
            Projects
          </NavLink>
          <NavLink
            to="/admin/messages"
            className="flex mb-3 items-center text-blue-600"
          >
            Messages
          </NavLink>
          <NavLink
            to="/admin/reviews"
            className="flex mb-3 items-center text-blue-600"
          >
            Reviews
          </NavLink>
          <NavLink
            to="/admin/project/add"
            className="flex mb-3 items-center text-blue-600"
          >
            Add Project
          </NavLink>
        </nav>
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden flex items-center w-full bg-white dark:bg-gray-900 px-4 py-3 border-b dark:border-gray-700 fixed z-10">
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          <img src="/logo192.png" alt="" className="w-8 rounded-full" />
        </span>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="ml-auto text-gray-900 dark:text-white focus:outline-none"
        >
          {sidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Sidebar overlay for mobile */}
      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 flex">
          <div className="w-64 bg-white dark:bg-gray-900 h-screen shadow-lg">
            <nav className="px-4 py-6">
              <NavLink
                onClick={() => setSidebarOpen(false)}
                to="/admin"
                className="flex mb-3 items-center text-blue-600"
              >
                Dashboard
              </NavLink>
              <NavLink
                onClick={() => setSidebarOpen(false)}
                to="/admin/projects"
                className="flex mb-3 items-center text-blue-600"
              >
                Projects
              </NavLink>
              <NavLink
                onClick={() => setSidebarOpen(false)}
                to="/admin/messages"
                className="flex mb-3 items-center text-blue-600"
              >
                Messages
              </NavLink>
              <NavLink
                onClick={() => setSidebarOpen(false)}
                to="/admin/reviews"
                className="flex mb-3 items-center text-blue-600"
              >
                Reviews
              </NavLink>
              <NavLink
                onClick={() => setSidebarOpen(false)}
                to="/admin/project/add"
                className="flex mb-3 items-center text-blue-600"
              >
                Add Project
              </NavLink>
            </nav>
          </div>
          <div
            className="flex-grow bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main content */}
      <div className="flex-grow ml-0 md:ml-64 pt-16 md:pt-0 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminNavbar;
