import React from "react";
import image from "../../assets/img/profilePic.png";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Card({ name, title, social: { github, dribbble, twitter, email } }) {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs p-5 mx-auto bg-white shadow-xl rounded-xl">
        <div className="">
          <img
            className="w-32 mx-auto rounded-full shadow-xl"
            src={image}
            alt="Profile face"
          />
        </div>
        <div className="mt-5 text-center">
          <p className="text-xl font-semibold text-gray-900 sm:text-2xl">
            {name}
          </p>
          <p className="inline-block w-auto px-5 pt-2 pb-4 text-xs text-gray-900 border-b-2 sm:text-base">
            {title}
          </p>
          <div className="flex justify-center mt-4 align-center">
            <a
              className="p-1 m-1 text-xl text-gray-900 transition-colors duration-300 rounded-full hover:bg-gray-800 hover:text-white sm:m-2 sm:p-2"
              href={github}
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="p-1 m-1 text-xl text-pink-600 transition-colors duration-300 rounded-full hover:bg-pink-600 hover:text-white sm:m-2 sm:p-2"
              href={dribbble}
            >
              <FaDribbble />
              <span className="sr-only">Dribble</span>
            </a>
            <a
              className="p-1 m-1 text-xl text-blue-500 transition-colors duration-300 rounded-full hover:bg-blue-500 hover:text-white sm:m-2 sm:p-2"
              href={twitter}
            >
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              className="p-1 m-1 text-xl text-teal-500 transition-colors duration-300 rounded-full hover:bg-teal-500 hover:text-white sm:m-2 sm:p-2"
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
