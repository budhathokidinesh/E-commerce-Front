import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config/config";
import { registerUser } from "@/store/auth-slice/authSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import b2 from "../../assets/b2.jpg";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast(data?.payload?.message);
        navigate("/login");
      } else {
        toast(data?.payload?.message);
      }
    });
  };
  console.log(formData);

  return (
    <div className="container grid grid-cols-1 md:grid-cols-2">
      {/* Left side for image section  */}
      <div className="hidden md:flex items-center justify-center bg-gray-100 mt-4">
        <img
          src={b2}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      {/* right side  */}
      <div className="flex items-center justify-center p-6">
        <div className="mw-full max-w-md space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Sign Up Now
            </h1>
          </div>
          <CommonForm
            formControls={registerFormControls}
            buttonText={"Sign Up"}
            formData={formData}
            setFormData={setFormData}
            onSubmit={onSubmit}
          />
          <p className="mt-2">
            Already have an account? &nbsp;
            <Link
              className=" link font-medium hover:underline  text-blue-900"
              to="/login"
            >
              Login🚀
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
