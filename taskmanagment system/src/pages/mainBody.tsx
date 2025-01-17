import { Link } from "react-router-dom";
import bgImage from "../assets/education-template.avif";
import { useSelector } from "react-redux"; // Assuming you are using Redux for state management

const MainBody = () => {
  const { user } = useSelector((state: any) => state.auth); // Get user state from Redux

  return (
    <div className="w-full flex justify-center items-center  mt-[78px] min-h-8 flex-col lg:flex-row bg-[#78c04f]">
      <img src={bgImage} alt="Background" />
      <div className="w-full h-full lg:w-2/3 flex flex-col justify-center items-center">
        <div className="w-full md:max-w-lg flex flex-col justify-center items-center gap-5 md:gap-y-10 md:-mt-20 md:text-7xl">
          <p className="flex flex-col gap-0 md:gap-4 md:text-3xl text-orange-700 capitalize text-center font-black">
            <span>Welcome to Your</span>
            <span>task management system</span>
          </p>
          <div className="flex gap-4">
            {user ? (
              <Link to="/login">
                <button className="inline-flex items-center gap-2 rounded-md bg-orange-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-orange-500">
                  Manage your Task
                </button>
              </Link>
            ) : (
              <Link to="/signup">
                <button className="inline-flex items-center gap-2 rounded-md bg-blue-700 py-1.5 px-3 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-blue-500">
                  Manage your Task
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <img src={bgImage} alt="Background" />
    </div>
  );
};

export default MainBody;
