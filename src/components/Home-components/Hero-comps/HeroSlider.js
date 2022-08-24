import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "../../../Scratch Builds/Carousel";

const useStyles = makeStyles((theme) => ({
  sliderImage: {
    objectFit: "cover",
  },
}));

const HeroSlider = () => {
  const classes = useStyles();

  return (
    <div>
      <Carousel />
    </div>
  );
};

export default HeroSlider;
