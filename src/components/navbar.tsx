import DarkModeToggle from "./themetoggle";
import LanguageSwitcher from "../components/languageswitcher";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header className="grid grid-cols-3 items-center bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4 w-full rounded-lg">
      <div>
        <h1 className="text-2xl font-bold">Portfolio</h1>
      </div>
      <div className="flex justify-center">
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="hover:text-gray-700 dark:hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-gray-700 dark:hover:text-gray-400"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-gray-700 dark:hover:text-gray-400"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex justify-end">
        <DarkModeToggle />
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
