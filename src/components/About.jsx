import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Daffa, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am an informatics engineering student. I like getting to know
              and learning new things. currently I master several programming
              languages such as Python, Html, Css, React, and Javascript. I also
              have experience in UI/UX design such as figma operation. contact
              me if you want to know more...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
