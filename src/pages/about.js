import HeroSection from "components/about/HeroSection";
import Footer from "components/Footer";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const About = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default About;

About.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  );
};
