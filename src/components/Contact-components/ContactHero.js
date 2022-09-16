import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    maxWidth: 1200,
    margin: "auto",
    padding: "0px 100px",
  },
  inner_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  contactus_text: {
    fontSize: 56,
    textAlign: 'center'
  },
  text_flex: {
    display: "flex",
    alignItems: "center",
    width: 506,
    justifyContent: 'space-between'
  },
  below_text: {
    fontSize: 16
  },
  image: {
    width: 605
  }
}));

const ContactHero = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.inner_flex}>
        <div>
          <p className={classes.contactus_text}>CONTACT US</p>
          <div className={classes.text_flex}>
            <p className={classes.below_text}>ULTEMA AUTOMOBILE</p>
            <p className={classes.below_text}>ULTEMA FASHIONS</p>
            <p className={classes.below_text}>ULTEMA SOLAR</p>
          </div>
        </div>

        <div>
          <img src="contact-man.png" className={classes.image} />
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
