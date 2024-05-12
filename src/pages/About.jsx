import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const About = () => {
  const skillRef = useRef();

  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <motion.div
      className="h-full md:mx-[50px] mx-10 "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="pt-16  flex flex-col gap-24 ">
        {/* BIOGRAPHY CONTAINER */}
        <div className="flex flex-col gap-4 justify-center">
          {/* BIOGRAPHY IMAGE */}
          <img
            src="https://scontent.fdac41-1.fna.fbcdn.net/v/t1.15752-9/423455043_1314200089223790_7706756842930056711_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEdRRahC0GLYdSCs0hGA19AXMu2fbPP2eNcy7Z9s8_Z42oN3OsB_nLkPkc8Sq6_kExiLfAie7dUFrOsg-f0aOwW&_nc_ohc=Dpa_6WsimaAQ7kNvgG8jpCj&_nc_ht=scontent.fdac41-1.fna&oh=03_Q7cD1QFEN_ou4FUlV4JZpD6r17J-lbVBzGNymDct9WUGzT-2tA&oe=66686E3C"
            alt=""
            width={112}
            height={112}
            className="w-32 h-32 rounded-full object-cover"
          />
          {/* BIOGRAPHY TITLE */}
          <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
          {/* BIOGRAPHY DESC */}
          <p className="text-lg">
            Hello! 👋 I'm Khandokar Rashidul Islam, a passionate and self-driven
            web developer with a strong foundation in HTML, CSS,
            JavaScript,along with proficiency in React, SCSS, Bootstrap, and
            Tailwind CSS. 💻🚀 I'm currently a third-year student pursuing a
            degree in Computer Science and Engineering. 🚀 I'm on the lookout
            for job opportunities that will allow me to apply and expand my
            skills while contributing to real-world projects.🌐 I'm comfortable
            with learning and working with new technologies, and I'm already
            familiar with basic Nextjs TypeScript , Node.js, Express.js, and
            MySQL ,Mongodb. Additionally, I have explored various JavaScript
            libraries.🌟 I thrive in collaborative environments and am always
            eager to learn and grow. I believe in the power of technology to
            make a positive impact, and I'm excited to be a part of the
            ever-evolving web development world. Let's connect and explore how
            we can create amazing web experiences together!
          </p>
          {/* BIOGRAPHY QUOTE */}
          <span className="italic">
            I strive for two things in design: simplicity and clarity.
          </span>
          {/* BIOGRAPHY SIGN SVG*/}
          <div className="self-end">
            <svg
              width="180"
              height="100"
              viewBox="0 0 180 141"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.7335 60.3484C50.5988 66.2766 50.2814 72.3903 49.0965 78.2073C48.2253 82.4841 47.9699 86.9947 46.9757 91.1922C45.5029 97.4109 42.7316 103.568 42.0273 109.907"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M40.688 75.0819C37.1762 75.0819 37.4117 73.2728 37.3394 69.9475C37.2454 65.6244 36 61.6213 36 57.2974C36 49.5793 37.853 45.017 44.1109 40.4059C47.0193 38.2629 52.6432 36.2388 56.2773 36.2388C59.9215 36.2388 65.5505 35.0572 68.4436 37.9503C70.8557 40.3624 70.1139 45.8053 70.9736 48.8145C72.8083 55.236 71.8839 63.8767 69.4854 69.8731C67.6115 74.5578 64.716 80.5205 59.7374 82.7835C58.0331 83.5582 52.2969 80.5175 55.5704 80.4396C58.6212 80.3669 60.7792 80.0664 60.7792 83.4905C60.7792 87.7815 60.7792 92.0726 60.7792 96.3637C60.7792 98.5974 61.2359 103.101 63.8301 103.842C65.3625 104.28 71.3436 104.398 70.1551 103.21"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M78.1918 91.8247C77.8655 93.1297 73.7285 92.4944 72.4993 92.4944C69.6234 92.4944 69.1706 93.5572 68.481 96.1778C68.0057 97.984 67.5042 100.876 69.2623 102.019C73.0109 104.456 72.8675 105.997 77.2244 103.507C79.159 102.402 79.5312 100.158 79.5312 98.1497C79.5312 96.0766 77.5221 93.5969 77.5221 96.8475C77.5221 100.919 79.4923 99.8607 82.3588 100.68C84.2634 101.224 87.8368 101.201 83.5494 101.201"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M92.9254 93.8339C94.9546 93.5802 92.2832 92.1498 91.7348 91.9736C89.5671 91.2768 87.474 91.155 85.2238 91.155C82.4849 91.155 80.5155 94.5709 82.3589 97.1824C84.345 99.9961 92.2557 97.0677 92.2557 102.205C92.2557 107.571 82.4903 105.395 79.5312 104.549"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M97.6133 87.1367C97.6133 90.4853 97.6133 93.8338 97.6133 97.1823C97.6133 99.9906 96.7271 108.021 98.1341 105.591C99.2756 103.619 101.289 95.9885 104.013 95.2104C105.409 94.8116 104.98 102.612 104.98 103.842C104.98 104.432 104.987 106.841 105.799 105.219C106.633 103.55 108.056 103.298 108.849 101.87C109.32 101.023 109.063 99.4197 109.333 98.4473C109.917 96.347 110.208 94.8602 110.933 92.8664C111.513 91.2724 111.007 94.1176 111.007 94.8756C111.007 96.7607 111.007 98.6458 111.007 100.531C111.007 104.555 114.382 103.74 117.035 103.21"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M123.732 73.073C123.732 77.3165 123 82.0145 122.355 86.2067C121.535 91.539 120.408 97.368 118.374 102.391C117.188 105.322 118.943 96.6714 118.3 95.5454C117.298 93.7915 116.365 97.6839 116.365 98.1498C116.365 99.7431 116.727 101.001 117.035 102.54"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M125.071 89.8155C126.034 89.6951 127.583 83.9436 127.787 82.8208C128.299 80.0063 126.527 88.4044 125.741 91.1549C125.3 92.6989 122.077 103.14 123.881 103.21C130.031 103.446 131.386 94.9615 132.773 90.5224C133.156 89.2967 132.99 87.9914 133.48 86.8018C133.764 86.1113 136.146 81.9308 135.489 84.6811C134.266 89.8018 133.108 93.4521 133.108 98.6705C133.108 99.6974 132.515 102.048 134.15 100.828C136.239 99.27 139.606 96.4015 140.475 93.7965C141.826 89.742 143.945 85.9305 145.795 82.0766C146.696 80.1987 146.437 78.1249 146.837 76.1237C146.979 75.4119 147.583 71.3869 147.023 74.189C145.962 79.4921 143.356 84.5948 141.665 89.6667C140.588 92.8986 141.939 96.4879 140.475 99.5635C139.572 101.459 139.805 103.506 139.805 105.554C139.805 110.859 144.362 113.186 149.032 114.595C153.101 115.822 157.598 115.264 161.794 115.264C164.4 115.264 164.24 115.188 163.914 112.586"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
              <path
                d="M110.338 87.1367H111.677"
                stroke="black"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </div>
          {/* BIOGRAPHY SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        {/* SKILLS CONTAINER */}
        <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
          {/* SKILL TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            SKILLS
          </motion.h1>
          {/* SKILL LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            className="flex gap-4 flex-wrap"
          >
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              JavaScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              TypeScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              React.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Next.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              SCSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Tailwind CSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              MongoDB
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              SQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Node.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Express.js
            </div>

            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              GraphQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              PHP
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Redux
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Framer Motion
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              C
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              C++
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              HTML
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              CSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              PUG
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              ejs
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Bootstrap
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Webpack
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Vite
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Docker
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
             Azure
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Firebase
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Git
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Figma
            </div>
          </motion.div>
          {/* SKILL SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#000000"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
          </motion.svg>
        </div>
        {/* EXPERIENCE CONTAINER */}
        <div
          className="flex flex-col gap-12 justify-center pb-48"
          ref={experienceRef}
        >
          {/* EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            EXPERIENCE
          </motion.h1>
          {/* EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            className=""
          >
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                   Full stack developer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I led web development, offering expertise in JavaScript
                  frameworks.
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024 - Present
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  junior JavaScript Developer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I spearheaded React-based application development, leveraging
                  advanced skills.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2021 - 2022
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                   
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Freelancer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I provided web solutions, applying a range of technologies to
                  address client requirements.
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2019 - 2021
                </div>
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
