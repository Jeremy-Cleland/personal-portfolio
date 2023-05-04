import React from "react";
// import profile from "../images/profile.png";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, social: { github, dribbble, twitter, email } }) {
  return (
    <div className="w-full">
      <div className="bg-white mx-auto flex max-w-xs flex-col justify-center rounded-xl p-5 shadow-xl">
        <div className="">
          {/* <img
            className="mx-auto w-32 rounded-full shadow-xl"
            src={profile}
            alt="Profile face"
          /> */}
        </div>
        <div className="mt-5 text-center">
          <p className="text-gray-900 text-xl font-semibold sm:text-2xl">
            {name}
          </p>
          <p className="text-gray-600 inline-block w-auto border-b-2 px-5 pb-4 pt-2 text-xs sm:text-base">
            {title}
          </p>
          <div className="align-center mt-4 flex justify-center">
            <a
              className="text-gray-800 hover:bg-gray-800 hover:text-white m-1 rounded-full p-1 text-xl transition-colors duration-300 sm:m-2 sm:p-2"
              href={github}
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-pink-600 hover:bg-pink-600 hover:text-white m-1 rounded-full p-1 text-xl transition-colors duration-300 sm:m-2 sm:p-2"
              href={dribbble}
            >
              <FaDribbble />
              <span className="sr-only">Dribble</span>
            </a>
            <a
              className="text-blue-500 hover:bg-blue-500 hover:text-white m-1 rounded-full p-1 text-xl transition-colors duration-300 sm:m-2 sm:p-2"
              href={twitter}
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="text-teal-500 hover:bg-teal-500 hover:text-white m-1 rounded-full p-1 text-xl transition-colors duration-300 sm:m-2 sm:p-2"
              href={"https://mail.google.com/mail/?view=cm&fs=1&to=" + email}
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
