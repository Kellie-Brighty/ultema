import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    maxWidth: 1200,
    margin: "auto",
    padding: "0px 100px",
    marginTop: 142,
    marginBottom: 142,
  },
  inner_flex: {
    display: "flex",
    justifyContent: "center",
  },
  input_row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: 700,
    marginTop: 20,
  },
  textarea_row: {
    display: "flex",
    justifyContent: "space-between",
    width: 700,
    marginTop: 20,
  },
  input: {
    outline: "none",
    border: "0.714px solid #000",
    width: 500,
    padding: 20,
  },
  textarea: {
    outline: "none",
    border: "0.714px solid #000",
    width: 500,
    padding: 20,
  },
}));

const ContactForm = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.inner_flex}>
        <div>
          <div className={classes.input_row}>
            <p>Name</p>
            <input type="text" className={classes.input} />
          </div>
          <div className={classes.input_row}>
            <p>Email</p>
            <input type="text" className={classes.input} />
          </div>
          <div className={classes.input_row}>
            <p>Phone No</p>
            <input type="text" className={classes.input} />
          </div>
          <div className={classes.textarea_row}>
            <p>Message</p>
            <textarea type="text" className={classes.textarea} cols="60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
