import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config/config";
import { loginUser } from "@/store/auth-slice/authSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import hanging from "../../assets/hanging.jpg";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast(data?.payload?.message);
      } else {
        toast(data?.payload?.message);
      }
    });
  };
  return (
    <div className=" container grid grid-col-1 md:grid-cols-2">
      {/* left hand side image section  */}
      <div className="hidden md:flex items-center justify-center bg-gray-100 mt-4">
        <img
          src={hanging}
          alt=""
          className="w-full h-full object-cover  rounded-xl"
        />
      </div>
      {/* This is right side  */}
      <div className="flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Log In Now
            </h1>
          </div>
          <CommonForm
            formControls={loginFormControls}
            buttonText={"Log In"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
          <p className="mt-2">
            Don't have account. Please register now. &nbsp;
            <Link className=" link font-medium  text-blue-900" to="/register">
              Register🚀
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
