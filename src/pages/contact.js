import Footer from "components/Footer";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const Contact = () => {
  return <div>Contact us</div>;
};

export default Contact;

Contact.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      {page}
      <Footer />
    </Layout>
  );
};
