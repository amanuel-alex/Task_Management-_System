import bgImage from "../assets/education-template.avif";

const MainBody = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center pl-4 mt-30 min-h-8 flex-col lg:flex-row  bg-green-500">
        <img src={bgImage} alt="" />
        <div className="w-full h-full lg:w-2/3 flex flex-col justify-center items-center">
          <div className="w-full md:max-w-lg  flex flex-col justify-center items-center gap-5 md:gap-y-10 md:-mt-20">
            <p className="flex flex-col gap-0 md:gap-4  md:text-3xl  text-blue-700 capitalize text-center font-black  ">
              <span>Welcome to </span>
              <span> task managment system</span>
            </p>
            <a href="./Login">
              <button className="inline-flex items-center gap-2 rounded-md bg-orange-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:bg-orange-500 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                Manage your task
              </button>
            </a>
          </div>
        </div>
        <img src={bgImage} alt="" />
      </div>
    </>
  );
};

export default MainBody;
