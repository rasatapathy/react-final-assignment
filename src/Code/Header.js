import React from "react";
// import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
      />
      
      <style type="text/css"></style>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="header_left">
        {/* <NavLink to={"/"}> */}
        <img
          className="header_logo"
          alt="logo"
          src = "data:image/png;base64,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"
        />
        {/* </NavLink> */}
      </div>
      <div className="header_right">
        {/* <NavLink className="header_text" to={"/"}> */}
            <h3 className="display-heading-text"> Courses </h3>
        {/* </NavLink> */}
        {/* <NavLink className="header_text" to={"/wishlist"}> */}
        <h3 className="display-heading-text">My Wishlist</h3>
        {/* </NavLink> */}
        {/* <NavLink to={"/checkout"}> */}
        <h3 className="display-icon"><i class="fa fa-shopping-cart fa_custom"></i></h3>
        {/* </NavLink> */}
        {/* <NavLink to={"/user"}> */}
        <h3 className="display-icon"><i class="fa fa-user"></i></h3>
        {/* </NavLink> */}
      </div>
    </div>
  );
}
export default Header;
