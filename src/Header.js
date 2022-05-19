import React from "react";
import "./Header.css";

//Adding icons from Material Icons
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header_navOption">
          <span className="header_navOptionLineOne">Hello User</span>
          <span className="header_navOptionLineTwo">Sign In</span>
        </div>
        <div className="header_navOption">
          <span className="header_navOptionLineOne">Return &</span>
          <span className="header_navOptionLineTwo">Orders</span>
        </div>
        <div className="header_navOption">
          <span className="header_navOptionLineOne">Your</span>
          <span className="header_navOptionLineTwo">Prime</span>
        </div>

        <div className="header_navBasket">
          <ShoppingBasketIcon />
          <span className="header_navOptionLineTwo header_navBasketCount">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
