import React, { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
const Repositories = () => {
  const [repo, setRepo] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/users/Farabiislam/repos"
        );
        setRepo(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();

    const data = async () => {
      try {
        const res = await axios.get("https://api.github.com/users/Farabiislam");
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    data();
  }, []);
    


  if (!data) {
    return <div className="flex justify-center items-center " >Loading...</div>;
  }
  if (!repo) {
    return (
      <div className=" flex justify-center items-center text-xl ">
        Loading...
      </div>
    );
  }

 
  return (
    <motion.div
      className=" md:px-[50px] flex flex-col md:flex-row "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" md:w-1/4  md:h-[calc(100vh-5rem)] flex p-2 flex-col items-center pt-6">
        <div className=" h-[200px] w-[200px] rounded-full p-2 m-2 ">
          <img className="rounded-full" src={data.avatar_url} alt="" />
        </div>
        <div className=" flex flex-col gap-[40px] ">
          <div>
            <h1 style={{ fontFamily: "myfont_bold" }} className=" text-xl md:text-lg lg:text-lg ">
              {data.name}
            </h1>
            <h2 className="text-sm "> {data.login}</h2>
            <h2 className=" mt-4 text- ">{data.bio}</h2>
          </div>
          <a
            className="flex items-center mb-6 gap-2 text-md font-bold py-1 bg-orange-400  justify-center px-[20px] rounded-md "
            href={data.html_url}
            target="blank"
          >
            Visit github Profile <GoArrowUpRight />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:h-[calc(100vh-5rem)] md:w-full ">
        <div className=" w-full py-2 flex justify-end">
          <span className="mr-[50px] font-bold ">
            Repositories : {data.public_repos}
          </span>
        </div>
        <div className=" md:p-4 px-4 py-6 md:flex md:flex-row flex-col flex-wrap gap-6 md:gap-6 justify-center overflow-y-scroll ">
          {repo.map((item) => (
            <div
              className=" hover:bg-gray-200  shadow-lg  md:h-[110px] md:w-[450px] h-[110px] mt-4 border border-gray-400 p-2 rounded-md  overflow-hidden "
              key={item.id}
            >
              <a className=" " href={item.html_url} target="blank">
                <div className="flex gap-1 items-center ">
                  <svg
                    aria-hidden="true"
                    height="16"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    data-view-component="true"
                    class="octicon octicon-repo mr-1 color-fg-muted"
                  >
                    <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                  </svg>
                  <h1
                    style={{ fontFamily: "myfont_bold" }}
                    className="text-md "
                  >
                    {item.name}
                  </h1>
                  <p
                    style={{ fontFamily: "myfont_regular" }}
                    className=" text-sm border px-2 pb-1 py-[1px] rounded-full "
                  >
                    {item.visibility}
                  </p>
                </div>
                <p style={{ fontFamily: "myfont_" }} className="font-bold ">
                  {item.description}
                </p>
                <p className=" text-sm">{item.language}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Repositories;
