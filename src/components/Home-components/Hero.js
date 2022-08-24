import React from "react";
import { makeStyles } from "@material-ui/core";
import HeroSlider from "./Hero-comps/HeroSlider";

const useStyles = makeStyles((theme) => ({
  hero: {
    marginTop: 82,
    maxWidth: 1200,
    margin: "auto",
    padding: "0px 100px"
  },
  inner_flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  hero_left: {},
  hero_left_h1: {
    fontSize: 46,
  },
  hero_left_P: {
    width: 488,
    fontSize: 16,
  },
  hero_left_btn: {
    background: "#000",
    color: "#fff",
    padding: "8px 10px",
    borderRadius: 4,
    cursor: "pointer",
    marginTop: 12,
  },
  hero_right: {},
}));

const Hero = () => {
  const classes = useStyles();
  return (
    <div className={classes.hero}>
      <div className={classes.inner_flex}>
        <div className={classes.hero_left}>
          <h1 className={classes.hero_left_h1}>BUY & SELL</h1>
          <p className={classes.hero_left_P}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <button className={classes.hero_left_btn}>Account</button>
        </div>

        <div className={classes.hero_right}>
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default Hero;
