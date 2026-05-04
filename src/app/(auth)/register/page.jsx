"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";



const RegisterPage = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const handleRegisterFunc = async (data) => {
      const {email, name, photo, password} = data;

      const {data: res, error}= await authClient.signUp.email({
         name: name, // required
    email: email, // required
    password: password, // required
    image: photo,
    callbackURL: "/",

      })
      console.log(res, error)
      if(error){
        alert(error.message)
      }if(res){
        alert('SignUp Successful')
      }
  };


  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here name"
              {...register("name", { required: true })}
            />
          {errors.name && <span>This field is required</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo Url</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here photo url"
              {...register("photo", { required: true })}
            />
          {errors.photo && <span>This field is required</span>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type here email"
              {...register("email", { required: true })}
            />
          {errors.email && <span>This field is required</span>}
          </fieldset>
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type here password"
              {...register("password", { required: true })}
            />
            <span
              className="absolute right-2 top-4 cursor-pointer"
            >
             
            </span>
            
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Register</button>
        </form>

        <p className="mt-4">
           have an account?
          <Link href={"/login"} className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage