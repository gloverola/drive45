import Footer from "components/Footer";
import AssetSection from "components/home/AssetSection";
import BrandSection from "components/home/BrandSection";
import HeroSection from "components/home/HeroSection";
import StatsSction from "components/home/StatsSections";
import WhySction from "components/home/WhySction";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <WhySction />
      <StatsSction />
      <AssetSection />
      <BrandSection />
    </div>
  );
};

export default Home;

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      pageTitle='Drive45 | Home'
      description='Drive45 - Your first choice mobility solution'
    >
      <Navbar />
      {page}
      <Footer />
    </Layout>
  );
};
