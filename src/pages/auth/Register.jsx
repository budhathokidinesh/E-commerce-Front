import CommonForm from "@/components/common/form";
import { registerFormControls } from "@/config/config";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const onSubmit = () => {};
  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign Up Now
        </h1>
        <p className="mt-2">
          Already have an account &nbsp;
          <Link
            className="font-medium text-primary hover:underline hover:text-blue-700"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Register;
