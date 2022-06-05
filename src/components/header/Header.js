import React, { useState } from "react";
import logosvg from "../../asserts/QOL.png";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import "./header.css";
import Button from "../helper/buttons/Button";
import { Link } from "react-router-dom";
import Select from "../helper/select/Select";
import { Avatar } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";

const Header = () => {
  const [islogin, setislogin] = useState(true);
  return (
    <div className="header_container">
      <div className="header">
        <div className="left_header">
          <div className="logo">
            <img src={logosvg} alt="logo" />
          </div>
          <Link to="/" className="company_name">
            SmarQo
          </Link>
          {/* <div className="explore">
                        Explore <ArrowDropDownIcon />
                    </div> */}
          <Select
            options={["option1", "option2", "optiom3"]}
            placeholder="Explore"
            className="explore"
          />
        </div>
        <div className="right_header">
          <div className="right_header_section1">Join as a Professional</div>
          <div
            className="right_header_section2"
            style={islogin ? { gap: "10px" } : {}}
          >
            {islogin ? (
              <div className="login_signup_btns">
                <NotificationsIcon />
                <EmailIcon />
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: "20px", height: "20px", fontSize: ".9rem" }}
                />
              </div>
            ) : (
              <div className="login_signup_btns">
                <Link to="/login" className="login_btn btn">
                  Login
                </Link>
                <Link to="/signup" className="signup_btn btn">
                  sign up
                </Link>
              </div>
            )}
            <Button
              btn_text="post requirement"
              btn_link="/postRequirementNow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
