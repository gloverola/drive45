import Footer from "components/Footer";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const Home = () => {
  return <div>indexxx</div>;
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
