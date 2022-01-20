import { Checkbox, FormControlLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import Button from "../helper/buttons/Button";
import Input from "../helper/input/Input";
import InputWithSelect from "../helper/input/InputWithSelect";
import InputOtp from "../helper/otpinput/InputOtp";
import SelectHelper from "../helper/select/Select";

const useStyle = makeStyles({
    firstnameLastname : {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px , 1fr))",
        gap : "15px"
    }
})

const Register = () => {
    const classes = useStyle()
    const [open, setopen] = useState(false)
  return (
    <div className="main_container_wrapper">
      <div className="card">
        <div style={{ fontSize: "2.8rem" }}>Register</div>
        <div className={classes.firstnameLastname}>
          <InputWithSelect
            label="First Name"
            name="firstName"
            component={
              <SelectHelper
                options={["option1", "option2", "option3", "option4"]}
                placeholder="Title"
              />
            }
          />
          <Input label="Last Name" name="lastName" />
        </div>
        <Input
          label="E-mail"
          name="email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          label="Password"
          name="password"
          placeholder="Enter your Password"
          type="password"
        />
        <Input
          label="Phone number"
          name="phoneNumber"
          placeholder="Enter your Phone number"
        />
        <div style={{ margin: "auto" }}>
          <FormControlLabel
            control={<Checkbox disableRipple style={{ color: "#707070" }} />}
            label="Read and accept terms and conditions"
            style={{ color: "#707070" }}
          />
        </div>
        <Button
          btn_text="Register"
          style={{ fontSize: "1rem", margin: "0px auto" }}
          onClick = {()=>setopen(true)}
        />
      </div>
      <InputOtp open={open} handleClose={()=>setopen(false)}/>
    </div>
  );
};

export default Register;
