import React from 'react'
const items = [
  {
    id: 1,
    title: "Notes App",
    desc: "Introducing my innovative notes app, built with cutting-edge technologies such as React.js, Node.js, and MySQL, designed to streamline your note-taking experience like never before.Our app offers a seamless user interface powered by React.js, ensuring a smooth and responsive experience across all devices. Whether you're jotting down quick reminders or drafting detailed thoughts, our intuitive design makes note-taking effortless. ",
    img: "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.15752-9/427910745_708793894452545_2657034272948946081_n.png?_nc_cat=105&cb=99be929b-b574a898&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeE9NKU2zlaHfsVAOEvop3_3E2_haplCZhUTb-FqmUJmFQObTzJU8FGhO2pvpKJ2CrESRYj5n85u-EshzCms9OZx&_nc_ohc=iaAYiOHlGH0AX9MILgy&_nc_ht=scontent.fdac41-1.fna&oh=03_AdRbJiZr2l-ScBjZr7gLRYem4Xb3xLGGfmskUDy1ah22cw&oe=66027A9A",
    link: "https://rashidul.my.id",
  },
  {
    id: 2,
    title: "Dice Rolling game",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img:"https://scontent.fdac41-1.fna.fbcdn.net/v/t1.15752-9/426347606_372469308917102_1797942133032238269_n.png?_nc_cat=111&cb=99be929b-b574a898&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHRtMqagBQVJ2EeZMQWcf3GFadYulGjFsIVp1i6UaMWwj8zXeWtgamG6c-kQ5YecZJMv0l7OBE3VEiS4ucW8DPj&_nc_ohc=nSDi2iNZt3YAX-ij_T-&_nc_ht=scontent.fdac41-1.fna&oh=03_AdTxTh7SH7dh5UKLfYhJKlUa0AkD5RUlVSKl2sYvgL11Vw&oe=6607DB3E",
    link: "https://farabi-dice-rolling.netlify.app/",
  },
  {
    id: 3,
    title: "Number guessing game",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://scontent.fdac41-1.fna.fbcdn.net/v/t1.15752-9/429952967_1110707583609108_1915193088116835930_n.png?_nc_cat=101&cb=99be929b-b574a898&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeHNdQ-gMV3EIVmWQGcLSWTyR_mCFtiv5bBH-YIW2K_lsNeabwLa4V1vQT0OdMILfBoZm5A4mvkqBk7d0LmS9zqv&_nc_ohc=qQXeuaIyRZoAX-nIcMY&_nc_ht=scontent.fdac41-1.fna&oh=03_AdQhexzIPN7wbSs4DNy4EpBBgk-fj74tnmcsexTaelBhXA&oe=6607EC6C",
    link: "https://farabis-fun-game1.netlify.app",
  },
  {
    id: 4,
    title: "Blog app",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    link: "https://rashidul.my.id",
  },
];

const AllProjects = () => {
  return (
    <div>
    {items.map((item) => (
      <div className=" h-[100%] w-[100%]  flex flex-col md:flex-row py-[80px] md:items-center">
        <div className="relative w-56 h-56 md:w-96 md:h-56 lg:w-[500px] lg:h-[450px]">
          <img
            className=" h-56 w-56 md:h-[450px] md:w-[450px] lg:h-[450px]  lg:w-[450px] "
            src={item.img}
            alt=""
            fill
          />
        </div>
        <div>
          <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-4xl">
            {item.title}
          </h1>
          <p className="w-80 md:w-96 lg:w-[500px] lg:text-md xl:w-[600px]">
            {item.desc}
          </p>

          <a href={item.link} target="blank" className="flex md:justify-end">
            <button className="font-bold bg-black text-white px-4 py-2 rounded-md ">
              See Demo
            </button>
          </a>
        </div>
      </div>
     ))}
  </div>
  )
}

export default AllProjects