import React, { useState } from "react";
import "./Navigation.css";
import { Button } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CategoryPanel from "../SideBar/CategoryPanel";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCatPanel((prev) => !prev);
  };
  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-3">
          <div className="col-1 w-[20%]">
            <Button
              className="!text-black !font-bold w-full"
              onClick={openCategoryPanel}
            >
              <AiOutlineMenu /> &nbsp; Shop By Categories&nbsp;
              <FaAngleDown />
            </Button>
          </div>
          <div className="col-2 w-[62%]">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Home
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Fashion
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Electronics
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Bags
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Footwear
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Groceries
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Beauty
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Wellness
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition font-medium">
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-3 w-[18%]">
            <p className=" text-[15px]font-medium">
              Free international delevery🚀
            </p>
          </div>
        </div>
      </nav>
      {/* Category Panel on left side  */}
      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCatPanel={isOpenCatPanel}
      />
    </>
  );
};

export default Navigation;
