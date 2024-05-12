import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Icon.png";
import "../App.css";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About" },
    { url: "/portfolio", title: "Projects" },
    { url: "/reopsitory", title: "Github-Repository" },
    { url: "/contact", title: "Contact" },
  ];

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div
      style={{ fontFamily: "myfont_clash_medium" }}
      className=" flex items-center  justify-between px-[50px] top-0 right-0 w-full z-50 "
    >
      {/* hight-64 */}
      <div className="flex items-center py-4 gap-6 ">
        <Link to="/" className="flex items-center gap-1">
          <img
            className=" h-8 w-10  md:h-10 md:w-10 lg:h-10 lg:w-10"
            src={Logo}
            alt="img"
          />
          <span
            className=" visible  md:invisible "
            style={{ fontFamily: "myfont_semi" }}
          >
            <b className="text-[20px] ">R</b>a.<b>s</b>u 
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-4 ">
          {links.map((link) => (
            <NavLink
              to={link.url}
              style={{ fontFamily: "myfont_bold" }}
              key={link.title}
              className="relative font-bold bg-transparent py-1 px-4 uppercase text-slidecolor text-[18px] hover:text-white hover:bg-slidecolor transition-all ease-in-out duration-500 "
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="md:hidden ">
        <button
          className="w-5 h-6 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? "opened" : "closed"}
            className="w-7 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
            className="w-7 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
            className="w-7 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>

        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            style={{ fontFamily: "myfont_bold" }}
            className="absolute top-0 left-0 w-screen h-screen bg-slidecolor text-white flex flex-col items-center justify-center gap-10 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
              >
                <Link onClick={() => setOpen((prev) => !prev)} to={link.url}>
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
