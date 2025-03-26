import React from "react";

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-t-1 border-b-1">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%">
              <p className="text-[14px font-medium">
                Get up to 50% off new season styles, limited time only.
              </p>
            </div>
            <div className="col2 flex items-center justify-end"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
