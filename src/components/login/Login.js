import React from "react";
import Input from "../helper/input/Input";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../postRequirements/postRequirement.css";
import Button from "../helper/buttons/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  middleCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  forgetpassword: {
    textDecoration: "underline",
    color: "#7D7D7D",
    fontSize: "0.8rem",
  },
  bottomcardOr: {
    fontSize: ".9rem",
    color: "gray",
    textAlign: "center",
    fontWeight: 600,
  },
  bottom: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    alignItems: "center",
    color: "#4E4E4E",
    marginTop: "30px",
    fontSize: ".8rem",
    "& a": {
      textDecoration: "underline",
      color: "#001D61",
    },
  },
});

const Login = () => {
  const classes = useStyles();
  return (
    <div className="main_container_wrapper">
      <div className="card">
        <div style={{ fontSize: "2.8rem" }}>Login</div>
        <Input label="E-mail" name="email" placeholder="Enter your email" />
        <Input
          label="Password"
          name="password"
          placeholder="Enter your Password"
          type="password"
        />
        <div className={classes.middleCard}>
          <FormControlLabel
            control={<Checkbox disableRipple style={{ color: "#202020" }} />}
            label="Remember me"
          />
          <Link to="/forgetPassword" className={classes.forgetpassword}>
            Forgot Password
          </Link>
        </div>
        <Button
          btn_text="Login"
          style={{ fontSize: "1rem", margin: "0px auto" }}
        />
        <div className={classes.bottomcardOr}>OR</div>
        <Button
          btn_text="Register"
          btn_link="/signup"
          style={{
            fontSize: "1rem",
            margin: "0px auto",
            background: "transparent",
            color: "#171717",
            padding: "0",
          }}
        />
      </div>
      <div className={classes.bottom}>
        <div>Offering a Service?</div>
        <Link to="/postRequirementNow">Join as a professional</Link>
      </div>
      <div className={classes.bottom} style={{ marginBottom: "6rem" }}>
        <div>Looking for a service?</div>
        <Link to="/postRequirementNow">Get Started</Link>
      </div>
    </div>
  );
};

export default Login;
