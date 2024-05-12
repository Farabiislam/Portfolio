import React from "react";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Repositories from "./Repositories";
import Home from "../pages/Home";
import Error from "../pages/Error";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Navbar from "./Navbar";


const TransitionProvider = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <motion.div
          className="h-screen w-screen  fixed bg-slidecolor rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto uppercase top-0 bottom-0 left-0 right-0 text-white text-4xl md:text-8xl cursor-default z-40 w-fit h-fit"
          style={{ fontFamily: "myfont_bold" }}
          initial={{ y: 1 }}
          animate={{ y: 1000 }}
          exit={{ y: 1000 }}
          transition={{ duration: 0.8,ease: "easeIn" }}
        >
          {location.pathname == "/"
            ? `wellcome Home`
            : ` ${location.pathname.substring(1)}`}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-slidecolor rounded-t-[100px] bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reopsitory" element={<Repositories />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
