/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useDisclosure } from "@chakra-ui/react";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import About from "../../components/About";
import Product from "../../components/Product";
import Team from "../../components/Team";
import Subscribe from "../../components/Subscribe";

const PageLayout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Sidebar isMobileSidebarOpen={isOpen} onMobileSidebarClose={onClose} />

      <Header onMobileSidebarOpen={onOpen} />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Product />
        <Team />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
