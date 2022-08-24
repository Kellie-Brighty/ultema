import React, { useState, useEffect } from "react";
import Header from "../components/General-components/Header";
import { makeStyles } from "@material-ui/core";
import SearchBox from "../components/Home-components/SearchBox";
import Hero from "../components/Home-components/Hero";
import MultiImage from "../components/Home-components/MultiImage";
import Footer from "../components/General-components/Footer";

const useStyles = makeStyles((themes) => ({}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <SearchBox />
      <Hero />
      <MultiImage />
      <Footer />
    </>
  );
};

export default Home;
