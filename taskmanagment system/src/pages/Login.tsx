import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";
import { useForm } from "react-hook-form";

const Login = () => {
  const user = "";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  useEffect(() => {
    user && navigate("/dashboard");
  }, [User]);

  return (
    <div className="w-full flex justify-center items-center min-h-screen flex-col lg:flex-row bg-red-500">
      <p className="text-red-600">login page form</p>
    </div>
  );
};

export default Login;
