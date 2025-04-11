import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      {/* this is for top strip  */}
      <div className="hidden md:flex top-strip py-2 border-t-1 border-b-1">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-medium text-blue-500">
                Get up to 50% off new season styles, limited time only.🚀
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-2">
                <li>
                  <Link
                    to="/help-center"
                    className="text-[15px] link font-medium transition text-blue-500"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="text-[15px] link font-medium transition text-blue-500"
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
      <div className="header py-4 border-t-1 border-b-1">
        <div className="container flex items-center justify-center gap-25 md:gap-10">
          {/* this is logo  */}
          <div className=" flex justify-center items-center py-4">
            <Link
              to={"/"}
              className=" text-5xl font-extrabold text-yellow-500 drop-shadow-md hover:text-yellow-500 transition duration-300"
            >
              <span className="text-gray-800">D</span>NS
              <span className="text-sm text-gray-500 ml-1 align-bottom">
                store
              </span>
            </Link>
          </div>
          {/* this is middle part  */}
          <div className="hidden md:flex">
            <p className="text-md text-gray-900 justify-center font-bold">
              Shop the freshest styles curated just for you. To see exclusive
              products, please Log In now🚀
            </p>
          </div>
          {/* this is right side  */}
          <div className="flex items-center">
            <ul className="flex items-center justify-end gap-3 p-4 w-full">
              <li>
                <Link
                  to="/login"
                  className="link transition font-bold text-blue-900"
                >
                  Log In
                </Link>
                <Link
                  to="/register"
                  className="link transition font-bold text-blue-900"
                >
                  / Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
