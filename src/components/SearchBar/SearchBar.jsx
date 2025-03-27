import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";
import Button from "@mui/material/Button";

const SearchBar = () => {
  return (
    <div className="searchBox w-[100%] h-[50px] bg-[#e5e5e5] rounded-xl relative p-2 flex">
      <input
        type="text"
        placeholder="Search Products..."
        className="w-full h-[35px] focus:outline-none p-2"
      />
      <Button></Button>
    </div>
  );
};

export default SearchBar;
