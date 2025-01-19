import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import axios from "axios";
const signupSchema = z.object({
  username: z
    .string()
    .min(3, "Username should be at least 3 characters long")
    .nonempty("Username is required"),
  email: z
    .string()
    .email("Please enter a valid email")
    .nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password should be at least 8 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .nonempty("Password is required"),
  confirmPassword: z.string().nonempty("Confirm Password is required"),
});

const SignUp = () => {
  const { user } = useSelector((state: any) => state.auth);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const [name, setName] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const onSubmit = (e: { preventDefault: () => void }) => {
    try {
      e.preventDefault();
      axios
        .post("http://localhost:3001/registration", { name, email, password })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
      navigate("/login");
    } catch (error) {}
  };

  return (
    <div className="w-full flex justify-between items-center min-h-screen flex-col lg:flex-row">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        <div className="w-full h-full lg:w-2/3 flex flex-col justify-center items-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col justify-center items-center gap-5 md:gap-y-10 md:-mt-20">
            <p className="flex flex-col gap-0 md:gap-4 text-3xl md:text-3xl 2xl:text-7xl text-green-700 capitalize text-center font-black">
              <span>Transform Your Productivity !</span>
              <span> Effortless Task Management at Your Fingertips</span>
            </p>
          </div>
        </div>
        <div className="w-full bg-[#03140a] rounded-lg border-t-8 border-t-green-400  shadow-lg md:w-1/3  md:p-1 flex justify-center items-center flex-col">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 px-10 "
          >
            <div>
              <p className="text-blue-600 text-3xl capitalize font-bold text-center">
                welcome create your account
              </p>
              <p className="text-base text-center text-blue-700">
                manage your tasks efficiently
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <TextBox
                placeholder="Username"
                type="text"
                name="username"
                label="Username"
                className="w-full rounded-full"
                register={register}
                error={errors.username}
                onClick={(e) => setName(e.target.value)}
              />
              <TextBox
                placeholder="email@example.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register}
                error={errors.email}
                onClick={(e) => setemail(e.target.value)}
              />
              <TextBox
                placeholder="your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register}
                error={errors.password}
                onClick={(e) => setpassword(e.target.value)}
              />
              <TextBox
                placeholder="confirm your password"
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                className="w-full rounded-full"
                register={register}
                error={errors.confirmPassword}
              />
            </div>
            <Button
              type="submit"
              label="Sign Up"
              className="bg-green-400 text-slate-200 mb-4 hover:bg-green-500 px-4 py-2 w-full rounded-full mt-4"
            />
          </form>
          <p className="text-base text-center text-white">
            Already have an account ?{" "}
            <a href="/login" className="text-green-700">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
