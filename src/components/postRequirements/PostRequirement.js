import { makeStyles } from "@mui/styles";
import React from "react";
import Button from "../helper/buttons/Button";
import Input from "../helper/input/Input"
import Textarea from "../helper/textarea/Textarea";
import "./postRequirement.css"

const useStyle = makeStyles({
  headText: {
    fontSize: "2rem",
    textAlign: "center",
  },
  subText : {
      fontSize : ".8rem",
      color : "#607395",
      textAlign: "center",
      marginTop : "10px",
  },
});

const PostRequirement = () => {
  const classes = useStyle();

  return (
    <div className="main_container_wrapper">
      <div className={classes.headText}>
        Request <b>Smart Quotes</b> from professionals
      </div>
      <div className={classes.subText}>
        Get quick Quotes from businesses Search and connect with the best
        professionals and businesses.
      </div>
      <form className="card">
          <Input label={<>Add <b>Title</b> to your quote request</>} name="quoteRequest" />
          <Input label={<>Select your <b>Location</b></>} name="location" />
          <Textarea label={<>Tell us more about your <b>requirements</b> here</>} name="requirements" />
          <Input label={<><b>When</b> do you need this</>} name="needtime" />
          <Input label={<>Add <b>industry Tags</b> related to your request</>} name="industryTag" />
          <Input label={<>How do you want the professional to <b>contact</b> you?</>} name="contactWay" />
          <Button
              btn_text="post requirement now"
              style={{ fontSize: "1rem" , margin : "0 auto"}}
            />
      </form>
    </div>
  );
};

export default PostRequirement;
