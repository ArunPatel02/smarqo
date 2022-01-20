import React, { useState } from "react";
import OtpInput from "react-otp-input";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import Button from "../buttons/Button";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "20px 60px",
  borderRadius: "10px",
  outline: 0
};

const inputStyle = {
  width: "3rem",
  height: "3rem",
  outline: "none",
  border: "1px solid #707070",
  fontSize: "2rem",
  borderRadius: "10px",
  color: "#707070",
};

const useStyle = makeStyles({
  headDiv: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "12px",
    alignItems: "center",
  },
  resendDiv: {
    display: "flex",
    gap: "10px",
    margin: "12px 0px",
    justifyContent: "space-between",
  },
  closeBtn : {
    position: "absolute",
    top: '20px',
    right: '20px',
    cursor: 'pointer'
  }
});

const InputOtp = (props) => {
  const classes = useStyle();
  const { open, handleClose, ...rest } = props;
  const [otp, setotp] = useState("");
  const handleChange = (otp) => {
    console.log(typeof otp);
    setotp(otp);
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={classes.headDiv}>
          <h1 style={{ fontSize: "1.1rem" }}>OTP Verification</h1>
          <p style={{ fontSize: ".8rem" }}>Phone Verify</p>
        </div>
        <div>
          <OtpInput
            value={otp}
            onChange={handleChange}
            numInputs={6}
            separator={<span style={{ margin: "0px 8px" }}></span>}
            inputStyle={inputStyle}
          />
        </div>
        <div className={classes.resendDiv}>
          <span style={{ fontSize: ".8rem", color: "#607395" , cursor : "pointer" }}>
            Resend OTP
          </span>
          <span
            style={{
              textDecoration: "underline",
              fontSize: ".8rem",
              color: "#001D61",
              cursor : "pointer"
            }}
          >
            Change Number
          </span>
        </div>
        <Button
          btn_text="Verify and Proceed Next"
          style={{ fontSize: "1rem", margin: "20px auto", marginBottom: "0px" }}
        />
        <CloseIcon className={classes.closeBtn} onClick={handleClose}/>
      </Box>
    </Modal>
  );
};

export default InputOtp;
