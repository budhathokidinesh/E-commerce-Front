import { Link } from "react-router-dom";
import db from "../../assets/db-store.png";
import SearchBar from "../SearchBar/SearchBar";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { IoIosGitCompare } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));
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
                    to="/order-tracking"
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
          <div className="col3 w-[35%] flex items-center">
            <ul className="flex items-center justify-end gap-3 p-4 w-full">
              <li>
                <Link to="/login" className="link transition font-medium">
                  Log In
                </Link>{" "}
                |{" "}
                <Link to="/register" className="link transition font-medium">
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wish List">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <ShoppingCartIcon />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
