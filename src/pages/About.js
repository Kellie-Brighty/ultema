import React from "react";
import AboutBody from "../components/About-components/AboutBody";
import AboutHero from "../components/About-components/AboutHero";
import Header from "../components/General-components/Header";

const About = () => {

  return (
    <div>
      <Header />
      <AboutHero />
      <AboutBody />
    </div>
  );
};

export default About;
