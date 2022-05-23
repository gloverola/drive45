import AdvantageSection from "components/about/AdvantageSection";
import HeroSection from "components/about/HeroSection";
import PeopleSection from "components/about/PeopleSection";
import Footer from "components/Footer";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const About = () => {
  return (
    <div>
      <HeroSection />
      <AdvantageSection />
      <PeopleSection />
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return (
    <Layout
      pageTitle='Drive45 | About'
      description='Drive45 - Your first choice mobility solution'
    >
      <Navbar />
      {page}
      <Footer />
    </Layout>
  );
};
