import React from "react";

const Intro: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-12">
      <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">
        FRANC
      </h1>
      <p className="text-sm max-w-xl mb-6 font-bold">
        Bachelor of Science in Information Technology
      </p>
      <p className="text-base md:text-xl mb-3 font-medium">
        React Web Developer
      </p>
      <ul>
        <li>React Hooks</li>
        <li>Signal R</li>
        <li>Git</li>
        <li>Tailwind</li>
        <li>Restful API</li>
      </ul>
    </div>
  );
};

export default Intro;
