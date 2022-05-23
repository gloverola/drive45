import Footer from "components/Footer";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import HeroSection from "components/services/HeroSection";
import React from "react";

const Services = () => {
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default Services;

Services.getLayout = function getLayout(page) {
  return (
    <Layout
      pageTitle='Drive45 | Services'
      description='Drive45 - Your first choice mobility solution'
    >
      <Navbar />
      {page}
      <Footer />
    </Layout>
  );
};
