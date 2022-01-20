import React from "react";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  btn: {
    width: "fit-content",
    fontSize: "0.8rem",
    color: "var(--white)",
    backgroundColor: "var(--btn-bgcolor)",
    cursor: "pointer",
    padding: "8px 35px",
    borderRadius: "5px",
    textTransform: "capitalize",
  },
});

const Button = ({ btn_text, btn_link, ...rest }) => {
  const classes = useStyle();

  return (
    <>
      {btn_link ? (
        <Link to={btn_link}>
          <div className={classes.btn} {...rest}>
            {btn_text}
          </div>
        </Link>
      ) : (
        <div className={classes.btn} {...rest}>
          {btn_text}
        </div>
      )}
    </>
  );
};

export default Button;
