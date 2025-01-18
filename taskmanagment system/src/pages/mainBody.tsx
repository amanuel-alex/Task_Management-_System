import { Link } from "react-router-dom";
import Managers from "../assets/managersimage.png";
import bgImage from "../assets/Task_managment.png";
import { useSelector } from "react-redux"; // Assuming you are using Redux for state management

const MainBody = () => {
  const { user } = useSelector((state: any) => state.auth); // Get user state from Redux
  return (
    <div className="w-full flex  items-center  mt-[78px] min-h-8 flex-col lg:flex-row bg-white  justify-between">
      <img src={bgImage} alt="Background" className="w-1/3" />
      <div className=" h-full lg:w-2/3 flex flex-col justify-center items-center w-1/3">
        <div className="w-full md:max-w-lg flex flex-col justify-center items-center  md:gap-y-10 md:-mt-56 md:text-7xl">
          <p className="flex flex-col gap-0 md:gap-4 md:text-5xl text-orange-700 uppercase text-center font-black">
            <span>Welcome to</span>
            <span>task management system</span>
          </p>
          <div className="flex gap-4">
            {user ? (
              <Link to="/login">
                <button className="w-56 inline-flex items-center gap-2 rounded-md bg-orange-700 py-3 px-3 text-2xl font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-orange-500">
                  Manage your Task
                </button>
              </Link>
            ) : (
              <Link to="/signup">
                <button className="text-2xl w-56 inline-flex  gap-2 rounded-md bg-blue-700 py-3 px-3 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-blue-500 text-center">
                  Manage your Task
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <img src={Managers} className="w-1/3 " alt="Background" />
    </div>
  );
};

export default MainBody;
