import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import Section6 from "../components/Section6";
import Section5 from "../components/Section5";
import Section4 from "../components/Section4";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section0 from "../components/Section0";

function Home() {
  return (
    <>
      <Head>
        <title>My New App Name</title>
      </Head>
      <Navbar />
      <div className="bg-white text-black">
        <Section0 />
        <Section1 />
        <Section2 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
      <Footer />
    </>
  );
}

export default Home;
