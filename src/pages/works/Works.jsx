import React, { useState} from "react";

import FullStack from "./FullStack";
import MernStack from "./MernStack";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import AllProjects from "./AllProjects";
import "../../App.css";
const Works = () => {

  const [all, setAll] = useState(true);
  const [fu, setFu] = useState(false);
  const [m, setM] = useState(false);
  const [fr, setFr] = useState(false);
  const [b, setB] = useState(false);

  const allfunc = () => {
    setAll(true);

    if (fu) {
      setFu(false);
    }
    if (m) {
      setM(false);
    }
    if (fr) {
      setFr(false);
    }
    if (b) {
      setB(false);
    }
  };
  const fullstack = () => {
    setFu(true);
    if (all) {
      setAll(false);
    }
    if (m) {
      setM(false);
    }
    if (fr) {
      setFr(false);
    }
    if (b) {
      setB(false);
    }
  };

  const mernstack = () => {
    setM(true);
    if (all) {
      setAll(false);
    }
    if (fu) {
      setFu(false);
    }
    if (fr) {
      setFr(false);
    }
    if (b) {
      setB(false);
    }
  };

  const frondend = () => {
    setFr(true);
    if (all) {
      setAll(false);
    }
    if (fu) {
      setFu(false);
    }
    if (m) {
      setM(false);
    }
    if (b) {
      setB(false);
    }
  };

  const backend = () => {
    setB(true);
    if (all) {
      setAll(false);
    }
    if (fu) {
      setFu(false);
    }
    if (m) {
      setM(false);
    }
    if (fr) {
      setFr(false);
    }
  };

 

  return (
    <div className="sticky top-0  h-[100vh] overflow-hidden md:px-[50px] ">
      <div
        style={{ fontFamily: "myfont_bold" }}
        className="flex h-[80px] text-[10px] md:text-xl justify-center items-center gap-2 md:gap-8 cursor-pointer "
      >
        <div
          onClick={allfunc}
          className={`px-2 py-1  border-2 border-slate-950 hover:bg-black hover:text-white rounded-md  ${
            all ? "active" : " "
          }`}
        >
          All Projects
        </div>
        <div
          onClick={fullstack}
          className={` px-2 py-1 border-2 border-slate-950 hover:bg-black hover:text-white rounded-md ${
            fu ? "active" : " "
          }`}
        >
          FullStack
        </div>
        <div
          onClick={mernstack}
          className={`px-2 py-1 border-2 border-slate-950 hover:bg-black hover:text-white rounded-md  ${
            m ? "active" : " "
          }`}
        >
          Mern Stack
        </div>
        <div
          onClick={frondend}
          className={` px-2 py-1 border-2 border-slate-950 hover:bg-black hover:text-white rounded-md ${
            fr ? "active" : " "
          }`}
        >
          FrontEnd
        </div>
        <div
          onClick={backend}
          className={`px-2 py-1 border-2 border-slate-950 hover:bg-black hover:text-white rounded-md  ${
            b ? "active" : " "
          }`}
        >
          BackEnd
        </div>
      </div>
      <div className="flex overflow-y-scroll px-[50px] h-[calc(100vh-4rem)]">
        <div>
          {all && <AllProjects />}

          {fu &&  <FullStack /> }

          {m && <MernStack />}
          {fr && <FrontEnd />}
          {b && <BackEnd />}
        </div>
      </div>
    </div>
  );
};

export default Works;
