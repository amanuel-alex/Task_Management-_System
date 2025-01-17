import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex fixed left-0 right-0 top-0 justify-between  bg-green-700 items-center p-4 bg-gradient-to-r from-blue-500 to-slate-300 shadow-lg z-50">
      <div className="text-3xl font-semibold tracking-wide">
        <span>CompanyLogo</span>
      </div>

      <div className="space-x-6">
        <Link to="/signup">
          <button className="text-slate-300 font-medium bg-green-700 px-6 py-2 rounded-lg border-2 transition-all duration-300 focus:outline-none">
            Sign Up
          </button>
        </Link>
        <Link to="/login">
          <button className="text-slate-500 font-medium px-6 py-2 rounded-lg border-2 hover:text-orange-400 transition-all duration-300 focus:outline-zinc-950">
            Log in
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
