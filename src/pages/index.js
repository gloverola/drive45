import Footer from "components/Footer";
import HeroSection from "components/home/HeroSection";
import WhySction from "components/home/WhySction";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhySction />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  );
};
