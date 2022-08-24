import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import "./multiImage.css";

const useStyles = makeStyles((theme) => ({
  body: {
    maxWidth: 1200,
    margin: "auto",
    padding: "0px 100px",
    marginTop: 69,
    marginBottom: 100,
  },
  inner_flex: {
    overflow: "auto",
    whiteSpace: "nowrap",
  },
  ad: {
    width: 200,
    height: 200,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "inline-block",
    margin: "0px 30px",
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      transition: ".5s",
      width: 220,
      "& p": {
        color: "#fff",
        transition: ".5s",
      },
    },
    marginTop: 15,
  },
  overlay: {
    width: "100%",
    height: "100%",
    transition: ".5s",
    borderRadius: 18,
    "&:hover": {
      background: "rgba(0, 0, 0, 0.483)",
      transition: ".5s",
      borderRadius: 18,
    },
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 125
  },
  inner_ad: {
    display: "flex",
    justifyContent: "flex-start",
    padding: 10,
  },
  inner_ad_desc: {},
}));

const MultiImage = () => {
  const classes = useStyles();

  const data = [
    {
      img: "car1.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "car2.png",
      title: "Lamborghini Diablo",
      price: "NGN 12,250, 161",
    },
    {
      img: "car3.png",
      title: "Jeep Gladiator, 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "car4.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "car5.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "car6.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "car7.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "car8.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "car9.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "car10.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
  ];

  const solar = [
    {
      img: "Rectangle1.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectangle2.png",
      title: "Lamborghini Diablo",
      price: "NGN 12,250, 161",
    },
    {
      img: "Rectangle3.png",
      title: "Jeep Gladiator, 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectangle4.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectangle5.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectangle6.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectangle7.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectangle8.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectangle9.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectangle10.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
  ];

  const fashion = [
    {
      img: "Rectanglee1.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectanglee2.png",
      title: "Lamborghini Diablo",
      price: "NGN 12,250, 161",
    },
    {
      img: "Rectanglee3.png",
      title: "Jeep Gladiator, 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectanglee4.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectanglee5.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectanglee6.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectanglee7.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectanglee8.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectanglee9.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
    {
      img: "Rectanglee10.png",
      title: "Toyota Camry 2021",
      price: "NGN 8,250, 161",
    },
  ];

  return (
    <div className={classes.body}>
      <p className={classes.title}>TOP ADVERTS</p>
      <div className={classes.inner_flex}>
        {data.map((image) => (
          <div
            key={image.img}
            className={classes.ad}
            style={{ backgroundImage: `url("${image.img}")` }}
          >
            <div className={classes.overlay}>
              <div className={classes.inner_ad}>
                <div className={classes.inner_ad_desc}>
                  <p>{image.title}</p>
                  <p>{image.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className={classes.title}>SOLAR</p>
      <div className={classes.inner_flex}>
        {solar.map((image) => (
          <div
            key={image.img}
            className={classes.ad}
            style={{ backgroundImage: `url("${image.img}")` }}
          >
            <div className={classes.overlay}>
              <div className={classes.inner_ad}>
                <div className={classes.inner_ad_desc}>
                  <p>{image.title}</p>
                  <p>{image.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className={classes.title}>FASHION ITEM</p>
      <div className={classes.inner_flex}>
        {fashion.map((image) => (
          <div
            key={image.img}
            className={classes.ad}
            style={{ backgroundImage: `url("${image.img}")` }}
          >
            <div className={classes.overlay}>
              <div className={classes.inner_ad}>
                <div className={classes.inner_ad_desc}>
                  <p>{image.title}</p>
                  <p>{image.price}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiImage;
