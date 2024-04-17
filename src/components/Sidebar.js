import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-white rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        {/* Home icon */}
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
        {/* End of home icon */}
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 w-[20%] border bg-black text-white shadow-lg"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li className="border-b border-gray-200 dark:border-gray-700">
              <Link
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                to="/"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0110 3.75zM10 15a.75.75 0 01-.75-.75V9.998L3.75 13.25v1.5L10 10.5V15zm-7.5-3.75A.75.75 0 012.25 10H10V4.248L2.25 7.5v3zm0 3.75a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="ml-3 text-sm font-medium">Home</span>
              </Link>
            </li>

            <li className="border-b border-gray-200 dark:border-gray-700">
              <Link
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                to="/dashboard"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12l-18 10v-20z" />
                </svg>
                <span className="ml-3 text-sm font-medium">Dashboard</span>
              </Link>
            </li>
            <li className="border-b border-gray-200 dark:border-gray-700">
              <Link
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                to="/control"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h18v2h-18zM3 7h18v2h-18zM3 11h18v2h-18zM3 15h18v2h-18z" />
                </svg>
                <span className="ml-3 text-sm font-medium">Aktuatorstyring</span>
                <span className="inline-flex items-center justify-center px-2 ml-auto text-sm font-medium text-gray-800 bg-gray-100 rounded-full">
                  Betal for adgang
                </span>
              </Link>
            </li>
            <li className="border-b border-gray-200 dark:border-gray-700">
              <Link
                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                to="/logs"
              >
                <svg
                  className="w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 0h-2v8h2v-8zM13 12h-2v4h2v-4zM19 4h-2v12h2v-12zM7 8h-2v8h2v-8zM1 16h2v4h-2v-4zM1 8h2v4h-2v-4zM7 0h-2v4h2v-4zM19 0h-2v4h2v-4z" />
                </svg>
                <span className="ml-3 text-sm font-medium">Logs</span>
                <span className="inline-flex items-center justify-center w-6 h-6 ml-auto text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  3
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
