import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import flag from "../../asserts/indiaFLag/Mask Group 3.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import "../../variable.css";

const useStyle = makeStyles({
  footerContainer: {
    margin: "0px auto",
    maxWidth: "var(--max-width)",
    padding: "3rem",
  },
  mainHeading: {
    fontSize: ".8rem",
    color: "#171717",
    marginBottom: "30px",
  },
  subHeading: {
    fontSize: ".8rem",
    color: "#06060687",
    marginBottom: "10px",
    cursor : "pointer",
  },
  flag : {
      height : "50px",
  },
  email : {
      marginTop : "10px",
  },
  number : {
      fontSize : "1.5rem",
      marginTop : "10px",
  },
  timing : {
      color : "#06060687",
      fontSize : ".91rem",
      marginTop : "5px",
  },
  icons : {
      display : "flex",
      justifyContent : "end",
      gap : "10px",
      marginTop  : "20px",
  }
});

const Footer = () => {
  const classes = useStyle();
  return (
    <Box className={classes.footerContainer}>
      <Grid container spacing={2} flexWrap={"nowrap"}>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item md={4} sm={6} xs={12}>
              <Typography variant="body1" className={classes.mainHeading}>
                For Customers
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              Find a Professional
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              How it works
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              Login
              </Typography>
            </Grid>
            <Grid item item md={4} sm={6} xs={12}>
              <Typography variant="body1" className={classes.mainHeading}>
              For Professionals
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              How it works
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              Pricing
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              Join as a Professional
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              Help Center
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              Mobile App
              </Typography>
            </Grid>
            <Grid item item md={4} sm={6} xs={12}>
              <Typography variant="body1" className={classes.mainHeading}>
              About
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              About
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              Team
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
              Careers
              </Typography>
              <Typography variant="body1" className={classes.subHeading}>
                Blog
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6} textAlign={"right"}>
          <img src={flag} alt="footer_logo" className={classes.flag} />
          <Typography variant="body1" className={classes.email}>Team@smarqo.com</Typography>
          <Typography variant="h1" className={classes.number}>+91 84568 65923</Typography>
          <Typography variant="body1" className={classes.timing}>
            (MON-FRI, 7 AM -9 PM)
          </Typography>
          <div className={classes.icons}>
            <TwitterIcon />
            <FacebookOutlinedIcon />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
