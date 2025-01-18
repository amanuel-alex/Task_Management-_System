import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex fixed left-0 right-0 top-0 justify-between  bg-green-700 items-center p-4 bg-gradient-to-r from-blue-200 to-slate-300 shadow-lg z-50">
      <div className="text-3xl font-semibold tracking-wide">
        <span>Amazing</span>
      </div>

      <div className="space-x-6">
        <Link to="/login">
          <button className="text-slate-500 font-medium px-4 py-2 rounded-lg border-2 hover:text-orange-400 transition-all duration-300 focus:outline-zinc-950">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="text-slate-300 font-medium  bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg border-2 transition-all duration-300 focus:outline-none">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
