import ContactSection from "components/contact/ContactSection";
import Footer from "components/Footer";
import Layout from "components/Layout";
import Navbar from "components/Navbar";
import React from "react";

const Contact = () => {
  return (
    <div>
      <ContactSection />
    </div>
  );
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
