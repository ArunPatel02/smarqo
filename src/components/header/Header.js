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
  const [islogin, setislogin] = useState(false);
  return (
    <div className="header_container">
      <div className="header">
        <div className="left_header">
          <div className="logo">
            <img src={logosvg} alt="logo" />
          </div>
          <Link to="/smarqo" className="company_name">
            SmarQo
          </Link>
          {/* <div className="explore">
                        Explore <ArrowDropDownIcon />
                    </div> */}
          <Select
            options={["option1", "option2", "optiom3"]}
            placeholder="Explore"
            className="explore"
            id="companyExplore"
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
                <Link to="/smarqo/login" className="login_btn btn">
                  Login
                </Link>
                <Link to="/smarqo/signup" className="signup_btn btn">
                  sign up
                </Link>
              </div>
            )}
            <Button
              btn_text="post requirement"
              btn_link="/smarqo/postRequirementNow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
