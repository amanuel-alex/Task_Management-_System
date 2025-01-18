import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { useSelector } from "react-redux";

const Login = () => {
  const { user } = useSelector((state: any) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Simulate checking user authentication status
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const SubmitHandler = async () => {
    console.log("submit");
  };
  console.log(user);
  return (
    <div className="w-full flex justify-center items-center min-h-screen flex-col lg:flex-row ">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center ">
        <div className="w-full h-full lg:w-2/3 flex flex-col justify-center items-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col justify-center items-center gap-5 md:gap-y-10 md:-mt-20">
            <p className="flex flex-col gap-0 md:gap-4  md:text-6xl 2xl:text-7xl text-orange-600 capitalize text-center font-black  ">
              <span> manage your </span>
              <span> tasks efficiently</span>
            </p>
          </div>
        </div>
        <div className="w-full bg-[#2e2c2c] rounded-lg border-t-8 border-b-8  border-b-lime-600 border-t-lime-500 shadow-lg md:w-1/3 p-4 md:p-1 flex justify-center items-center flex-col">
          <form
            onSubmit={handleSubmit(SubmitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 px-10 py-14 "
          >
            <div>
              <p className="text-blue-600 text-3xl font-bold text-center">
                welcome back!
              </p>
              <p className="text-base text-center text-blue-700">
                keep all your credentials safe
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <TextBox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register}
                error={errors.email}
              />
              <TextBox
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full "
                register={register}
                error={errors.password}
              />
            </div>
            <a className="text-white flex justify-center hover:text-blue-700  hover:underline text-sm cursor-pointer">
              forgot password ?
            </a>
            <Button
              type="submit"
              label="Submit"
              className="bg-blue-600 text-slate-300 hover:bg-blue-800 px-4 py-2 w-full rounded-full mt-4"
            />
            <p className="text-base text-center text-white">
              Don't have an account ?{" "}
              <a href="/signup" className="text-green-700">
                Signup
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
