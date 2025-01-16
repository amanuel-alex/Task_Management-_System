import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import User from "./User";
import { useForm } from "react-hook-form";
import {z} from "zod"

const signupSchema = z.object({
  username: z
    .string()
    .min(3, 'Username should be at least 3 characters long')
    .nonempty('Username is required'),
  
  email: z
    .string()
    .email('Please enter a valid email')
    .nonempty('Email is required'),

  password: z
    .string()
    .min(8, 'Password should be at least 8 characters long')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/\d/, 'Password must contain at least one number')
    .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .nonempty('Password is required'),

  confirmPassword: z
    .string()
    .nonempty('Confirm Password is required')
    .refine((val, ctx) => val === ctx.parent.password, {
      message: "Passwords don't match",
    })
    
const SignUp = () => {
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

  return(
     <div className="text-4xl">login page form</div>);
}
export default SignUp
