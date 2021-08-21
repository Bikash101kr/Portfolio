import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillPhone,  } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BsDownload } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import { RiDownload2Fill } from "react-icons/ri";


const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <Image
        src= "/images/bikash.jpg"
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-xl font-medium tracking-normal">
        <span className="font-sans text-justify text-bold ">BIKASH DHAKAL </span>  
      </h3>
      <p className="px-2 py-1 my-3 rounded-full dark:bg-dark-200 dark:bg-black-500">
        IT Enthusiast
      </p>
      {/* Resume */}
      <a
        href="/assets/Bikash Resume.pdf"
        download="Bikash Dhakal Resume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <RiDownload2Fill className="justify-center w-4 h-4 mr-2"  />
        <span>Resume</span>
      </a>

      {/* Socials */}

      <div className="flex justify-around w-9/12 mx-auto my-5 md:w-full ">
      <a href="https://www.linkedin.com/in/bikash-dhakal-95655a133/" >
          <AiFillLinkedin className="w-8 h-8 text-blue-700 cursor-pointer" />
        </a>
        <a href="https://github.com/Bikash101kr">
          <AiFillGithub className="w-8 h-8 text-Giant cursor-" />
        </a>
        <a href="https://www.instagram.com/bikash101_/">
          <AiFillInstagram className="w-8 h-8 text-pink-600 cursor-pointer" />
        </a>
 </div> 

      {/* Address */}
      <div
        className="py-4 my-5 bg-yellow-200 dark:bg-dark-200 dark:bg-black-500 "
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <a href="https://goo.gl/maps/ogCv812KjMEYyuqJ9">
          <GoLocation className="mr-3 text-blue-600 cursor-pointer" 
          onClick={() => window.open("https://goo.gl/maps/ogCv812KjMEYyuqJ9")}/>
          </a>
          <span>Kathmandu, Nepal</span>
        </div>
        </div>

        <div
         className="py-2 my-5 bg-indigo-200 dark:bg-dark-200 dark:bg-black-500"
         style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
        >
        <div className="flex items-center justify-center my-5 md:w-full ">
          
          <AiFillPhone className="w-6 h-6 mr-3 text-green-500 cursor-pointer"
          onClick={() => window.open("tel:+9779860196032")}/>
          <span >+977- 9860196032/9810019824</span>
        </div>

        <div className="flex items-center justify-center my-5 md:w-full ">
          
          <AiFillMail className="w-6 h-6 mr-3 text-pink-700 cursor-pointer" 
          onClick={() => window.open("mailto:dhakalbikash0@gmail.com")}/>
          <span>dhakalbikash0@gmail.com</span>
        </div>
        
 
        {/* <p className="my-2 "> code.sumax </p>
        <p className="my-2"> 8514961665 / 8640960375 </p> */}
      </div>

      {/* Email Button */}

      {/* <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
        onClick={() => window.open("tel:code.sumax@gmail.com")}
      >
        Email me
      </button> */}
      <button
        onClick={changeTheme}
        className="w-6/12 px-3 py-2 my-4 font-sans font-bold text-white bg-black rounded-full cursor-pointer font bg-gradient-to-r from-purple-600 to-pink-400 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
