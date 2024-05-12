import "../App.css";
import Me from "../assets/mee.png";
import Glob from "../assets/globe.mp4";
import { GoArrowUpRight } from "react-icons/go";
import svg from "../assets/mainIcons.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Home = () => {
  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };
  return (
  
      <div className="overflow-hidden relative h-[88vh]"
      >
        <video
          autoPlay
          loop
          muted
          className="fixed h-screen top-0 w-full object-cover z-[-1] "
        >
          <source src={Glob} type="video/mp4" />
        </video>

        <motion.div className=" flex md:flex-row flex-col md:justify-between px-[50px] "
        
        >
          <div className="flex items-start flex-col md:mt-[90px] mt-[100px]">
            <span
              style={{ fontFamily: "myfont_bold" }}
              className=" text-slidecolor text-[30px] md:text-[50px] "
            >
              HI THERE <b className="text-orange-500 ">I'M</b>{" "}
            </span>
            <span
              style={{ fontFamily: "myfont_bold" }}
              className="ml-4 text-[17px]  md:text-[42px] "
            >
              KHANDOKER RASHIDUL ISLAM
            </span>
            <span
              style={{ fontFamily: "myfont_clash_regular  " }}
              className="text-slidecolor mt-[20px] text-[12px] tracking-widest "
            >
              By analyzing your needs and your goals, together we can create
              <br /> or upgrade a "people-centric" site,funtional and designed
              <br /> for your potential visitors.
            </span>
            <Link
              to="/contact"
              style={{ fontFamily: "myfont_clash_regular" }}
              className="mt-[40px] font-bold flex items-center gap-1 hover:text-emerald-600 "
            >
              Make a call <GoArrowUpRight  className="text-orange-700 " />
            </Link>
          </div>

          <img
            height={650}
            width={550}
            className=" top-1 right-1 "
            src={svg}
            alt=""
          />
        </motion.div>

        <motion.div
          style={{ fontFamily: "myfont_star" }}
          className=" md:bottom-[-45px] bottom-[-10px] absolute whitespace-nowrap text-black opacity-30 w-[50%] font-bold text-[8vh] lg:text-[20vh] md:text-[20vh] "
          variants={sliderVariants}
          initial="initial"
          animate="animate"
        >
          Fullstack web developer
        </motion.div>
      </div>
    
  );
};

export default Home;
