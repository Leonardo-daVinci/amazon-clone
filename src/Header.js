import React from "react";
import "./Header.css";

//Adding icons from Material Icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { firebaseAuth } from "./firebase";

function Header() {
  //this is added to get the data layer - access to items added
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    firebaseAuth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_navOption">
            <span className="header_navOptionLineOne">
              Hello, {user ? user.email : "Guest"}
            </span>
            <span className="header_navOptionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to={"/orders"}>
          <div className="header_navOption">
            <span className="header_navOptionLineOne">Return &</span>
            <span className="header_navOptionLineTwo">Orders</span>
          </div>
        </Link>

        <div className="header_navOption">
          <span className="header_navOptionLineOne">Your</span>
          <span className="header_navOptionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_navBasket">
            <ShoppingBasketIcon />
            <span className="header_navOptionLineTwo header_navBasketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
