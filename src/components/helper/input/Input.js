import { makeStyles } from "@mui/styles";
import React from "react";

const useStyle = makeStyles({
  inputBox: {
      display : "flex",
      flexDirection : "column",
      gap : "10px"
  },
  label: {
    fontSize: "1rem",
  },
  input: {
    outline: "none",
    border: "0.5px solid var(--boder-color)",
    borderRadius: "5px",
    padding: "10px 6px",
  },
});

const Input = (props) => {
  const { name, label, ...rest } = props;
  const classes = useStyle()
  return (
    <div className={classes.inputBox}>
      <label htmlFor={name} className={classes.label}>{label}</label>
      <input type="text" name={name} id={name} {...rest} className={classes.input}/>
    </div>
  );
};

export default Input;
