import { Link } from "react-router-dom";
import db from "../../assets/db-store.png";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <header>
      {/* this is for top strip  */}
      <div className="top-strip py-2 border-t-1 border-b-1">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%">
              <p className="text-[14px font-medium">
                Get up to 50% off new season styles, limited time only.
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-2">
                <li>
                  <Link
                    to="/help-center"
                    className="text-[15px] link font-medium transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order/tracking"
                    className="text-[15px] link font-medium transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* this is for header*/}
      <div className="header">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[15%]">
            <Link to={"/"}>
              {" "}
              <img src={db} alt="" className="h-25 w-25" />
            </Link>
          </div>
          <div className="col2 w-[50%]">
            <SearchBar />
          </div>
          <div className="col3 w-[35%]"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
