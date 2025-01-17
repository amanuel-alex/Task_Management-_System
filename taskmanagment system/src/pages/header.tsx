const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r text-blue-500 to-slate-300 shadow-lg marker:">
      <div className="text-3xl font-semibold tracking-wide">
        <span>ComparyLogo</span>
      </div>

      <div className="space-x-6">
        <button className="text-slate-300 font-medium bg-green-700 px-6 py-2 rounded-lg border-2 transition-all duration-300   focus:outline-none">
          Sign Up
        </button>
        <button className="text-slate-500 font-medium px-6 py-2 rounded-lg border-2  hover:text-orange-400 transition-all duration-300 focus:outline-zinc-950">
          Log in
        </button>
      </div>
    </header>
  );
};

export default Header;
