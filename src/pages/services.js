import Footer from "components/Footer";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const Services = () => {
  return <div>Services</div>;
};

export default Services;

Services.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  );
};
