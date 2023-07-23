import { Button } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { RESET_AUTH } from "../Redux/Auth/ActionTypes";
function Navbar() {
  const { user, auth } = useSelector((el) => {
    return el.auth;
  });
  const dispatch = useDispatch();
  const logout = () => {
    dispatch({ type: RESET_AUTH });
    Cookies.remove("jwtoken");
  };
  return (
    <div className="navbar">
      <div>
        <img
          className="companyLogo"
          src="data:image/png;base64,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"
          alt=""
        />
      </div>
      <div className="userNavbar">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        {auth ? user : ""}
        <Button onClick={logout}>Logout</Button>
      </div>
    </div>
  );
}

export default Navbar;
