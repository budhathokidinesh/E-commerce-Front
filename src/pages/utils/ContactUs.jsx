import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="container p-10">
      <div className="text-4xl">This page is comming soon....</div>
      <Link to="/" className="mt-10 block">
        <Button className="hover:cursor-pointer">Go Home Page 🚀</Button>
      </Link>
    </div>
  );
};

export default ContactUs;
