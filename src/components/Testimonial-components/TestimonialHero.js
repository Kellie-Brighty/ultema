import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  body: {
    maxWidth: 1440,
    margin: "auto",
  },
  inner_flex: {
    width: "100%",
    margin: "auto",
    position: "relative",
  },
  image: {
    width: "100%",
  },
  text_box: {
    background: "#fff",
    position: "absolute",
    top: 200,
    width: 600,
    left: 50,
    padding: 30,
    borderRadius: 12,
  },
  box_text: {
    textAlign: 'center',
    fontSize: 40
  }
}));

const TestimonialHero = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <div className={classes.inner_flex}>
        <img src="testimonial_hero.png" className={classes.image} />
      </div>
    </div>
  );
};

export default TestimonialHero;
