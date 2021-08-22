import { RiComputerLine } from "react-icons/ri";
import { FaAdobe, FaArtstation, FaCss3, FaJava, FaJs, FaNodeJs, FaPhotoVideo, FaPython, FaReact, FaServer } from "react-icons/fa";
import { AiFillLike, AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdArtTrack, MdDeveloperMode, MdDevicesOther, MdNotInterested } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsBootstrap, BsCircleFill } from "react-icons/bs";
import { GiAndroidMask, GiChaliceDrops, GiDeliveryDrone, GiEternalLove, GiFarmer, GiHabitatDome, GiHobbitDoor, GiHobbitDwelling, GiLoveInjection, GiLoveMystery, GiLovers, GiSharpAxe } from "react-icons/gi";
import { GoLinkExternal } from "react-icons/go";
import { workerData } from "worker_threads";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful & scalable single & multi-page application using <b> HTML</b>,<b>CSS</b> & <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "Handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Express-REST-API</b>  & <b>Node API</b> ",
  },
  // {
  //   Icon: MdDeveloperMode,
  //   title: "Competitive Coder",
  //   about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  // },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX ",
    about:
      "I can design user interface using <b>Adobe XD</b>  &  <b>Framer</b> ",
  },
  // {
  //   Icon: MdArtTrack,
  //   title: "Whatever",
  //   about:
  //     " I love to do photography, videography & cinamatic kind of stuff. I have good knowlwdge on <b>Adobe Photoshop, Lightroom, Premiere Pro, Drone Development</b> & <b>Drone Piloting.</b> My love for the<b> Travelling, Reading Books</b> & writting <b>Poetry</b> is eternal.",
  // },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "C#",
    //level: "40",
  },
  {
    Icon: FaJs,
    name: "Java Script",
    //level: "60",
  },
  {
    Icon: FaReact,
    name: "React",
    //level: "80",
  },
  {
    Icon: FaNodeJs,
    name: "Node",
    //level: "80",
  },

  {
    Icon: FaJava,
    name: "Java",
    //level: "40",
  },
  {
    Icon: FaCss3,
    name: "Css",
    //level: "85",
  },
  {
    Icon: BsBootstrap,
    name: "Bootstrap",
    //level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: FaAdobe,
    name: "Adobe XD",
    //level: "65",
  },
  {
    Icon: FaAdobe,
    name: "Photoshop",
    ///level: "45",
  },
  {
    Icon: FaAdobe,
    name: "Illustrator",
    ////level: "40",
  },
  {
    Icon: GiFarmer,
    name: "Framer",
    //level: "45",
  },
  {
    Icon: FaAdobe,
    name: "Lightroom",
    //level: "70",
  },
  
];

export const projects: IProject[] = [
  { 
    name: "Serve Humanity",
    description:
      "Through this app user can donate blood and request blood when needed.",
    image_path: "/images/serveHumanityWeb.JPG",
    deployed_url: "!#",
    github_url: "https://github.com/Bikash101kr/BloodDonationWebAppFrontend-Reactjs",
    category: ["react", "mongo", "node", "express"],
    key_techs: ["React", "CSS", "Bootstrap"],
  },
  {
    name: "Online Hotel Booking ",
    image_path: "/images/hotel.png",
    deployed_url: "!#",
    github_url: "https://github.com/Bikash101kr/OnlineHotelBookingSystem-FrontEnd-Reactjs",
    category: ["react", "express", "mongo", "node"],
    description:
      "An web app through which user can book and watch details of thousands of hotels",
    key_techs: ["React", "MongoDB", "Node"],
  },

  {
    name: "Pharmacy POS",
    image_path: "/images/pos.png",
    deployed_url: "!#",
    github_url: "https://github.com/Bikash101kr/PharmacyPOS",
    category: ["Xamarin", "SqLite", "C#"],
    description:
      "This system is deigned and develop for Pharmacy Point of Sale solution",
    key_techs: [
      "Xamarin",
      "SqLite",
      "C#",
      
    ],
  },

  {
    name: "Blood Donation APP",
    image_path: "/images/serveAndriod.JPG",
    deployed_url: "!#",
    github_url: "https://github.com/Bikash101kr/BloodDonation-Andriod-APP",
    category: ["Java", "node", "express", "mongo"],
    description:
      "This is an Android Application. Through this application user can donate and request blood when needed ",
    key_techs: ["Node", "Express", "Java", "mongo"],
  },
];
