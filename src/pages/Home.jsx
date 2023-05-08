import React from "react";
import data from "../assets/data.jsx";

const Home = () => {
  return (
    <div className="pl-100 p-8">
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-4 font-Knewave text-4xl tracking-widest text-midnight-900 dark:text-acccent-100">
          {data.name}
        </h1>
        <h2 className="font-Knewave text-xl tracking-widest dark:text-acccent-100">
          {data.title}
        </h2>
      </div>
    </div>
  );
};

export default Home;
