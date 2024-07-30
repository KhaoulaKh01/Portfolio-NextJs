import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiRedux, SiNextdotjs, SiFlutter, SiMysql, SiMongodb, SiAngular, SiSwift, SiAndroid, SiLinux, SiGnubash } from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';

const skills = {
  Databases: [
    { name: "MySQL", image: <SiMysql size={40} color="#003b57" /> },
    { name: "SQL Server", image: <FontAwesomeIcon icon={faMicrosoft} size="2x" /> },
    { name: "MongoDB", image: <SiMongodb size={40} color="#4DB33D" /> },
  ],
  Frontend: [
    { name: "React Js", image: <FaReact size={40} color="#61DAFB" /> },
    { name: "Next Js", image: <SiNextdotjs size={40} color="#000000" /> },
    { name: "Angular", image: <SiAngular size={40} color="#DD0031" /> },
    { name: "HTML", image: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS", image: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "JavaScript", image: <FaJava size={40} color="#F7DF1E" /> },
    { name: "Bootstrap", image: <FaBootstrap size={40} color="#563D7C" /> },
    { name: "Material UI", image: <SiFlutter size={40} color="#02569B" /> },
  ],
  OS: [
    { name: "Linux", image: <SiLinux size={40} color="#FCC624" /> },
    { name: "GNU", image: <SiGnubash size={40} color="#000000" /> },
  ],
  Mobile: [
    { name: "Apple", image: <img src="/ios.svg" alt="ios" width={40} height={40} /> },
    { name: "Android", image: <SiAndroid size={40} color="#3DDC84" /> },
    { name: "Swift", image: <SiSwift size={40} color="#F05138" /> },
  ],
  Desktop: [
    { name: "C#", image: <img src="/csharpIcon.svg" alt="C#" width={40} height={40} /> },
    { name: "Java", image: <FaJava size={40} color="#007396" /> },
  ],
  Backend: [
    { name: "Node Js", image: <FaNodeJs size={40} color="#8CC84B" /> },
    { name: ".NET", image: <FontAwesomeIcon icon={faMicrosoft} size="2x" /> },
  ],
};

const Skills = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 p-5" id="skills">
      <div className="flex flex-col items-center w-full max-w-5xl gap-6">
        <h2 className="text-4xl font-semibold text-center mt-24 text-gray-600">Skills</h2>
        <p className="text-lg text-center max-w-2xl text-gray-800">
          Here are some of my skills on which I have been working on for this year.
        </p>
        <div className="flex flex-wrap justify-between gap-25">
          {Object.entries(skills).map(([category, skillSet]) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-white border border-gray-300 shadow-lg rounded-lg p-100 mb-4 flex flex-col items-center" key={category}>
              <h3 className="text-2xl font-semibold mb-5 text-transparent bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-center">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skillSet.map((item) => (
                  <div className="text-sm font-medium text-blue-600 border border-blue-600 rounded-lg p-4 flex items-center gap-2" key={item.name}>
                    {item.image}
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
