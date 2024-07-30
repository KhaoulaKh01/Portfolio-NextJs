"use client"; 

import React, { useState } from 'react';

const projects = [
  {
    title: "Calculator",
    imageSrc: "/Calculatrice.png",
    description: "A calculator application built using WPF and C# for a smooth user experience.",
    detailedDescription: "It's a school project where I was asked to make a desktop application for Windows using WPF with C#. The application is a simple calculator that allows users to perform basic arithmetic operations. In this project, I learned how to use WPF components to create a user-friendly interface and handle user inputs effectively. I also gained experience in C# programming and understanding the event-driven programming model in WPF. This project helped me improve my problem-solving skills and learn how to manage small-scale projects efficiently.",
    skills: ["WPF", "C#"],
    source: "https://github.com/2709725KHOUDALI/CalculatriceK.git"
  },
  {
    title: "Hospital Management System",
    imageSrc: "/gestionHopital.png",
    description: "A comprehensive hospital management system developed with WPF and C#. It features modules for managing doctors, specialties, and consultations. SQL Server is used for data storage.",
    detailedDescription: "It's a school project where I was asked to make a desktop application for Windows using WPF with C#. I picked SQL Server as a database of choice. The application allows users to manage doctors, specialties, and consultations within a hospital. Users can add new doctors, specialties, and consultations, as well as find information based on various criteria. All data entries are checked, and the user is notified with accurate messages describing any errors. In this project, I learned how to use complex WPF components such as 'DataGrid', integrate a database with my WPF project, and exchange data with it. I also improved my skills in managing complex user interfaces using the WPF grid layout. Additionally, I learned time management and how to deal with stress and deadlines. This was an opportunity to use SQL Server for the first time and see how it integrates with the Microsoft environment.",
    skills: ["WPF", "C#", "SQL Server"],
    source: "https://github.com/2709725KHOUDALI/ProjetHopital.git"
  },
  {
    title: "Cannabis Inventory Management",
    imageSrc: "/DesktopCannabis.png",
    description: "An application for managing a cannabis business's inventory. Developed with WPF and C#, it allows importing data, tracking inventory, and generating QR codes. SQL Server is used for database management.",
    detailedDescription: "This project involved developing a desktop application for Windows using WPF and C#. The application manages the inventory for a cannabis business, enabling users to import data, track inventory, and generate QR codes. By leveraging SQL Server as the database, I ensured robust data validation, providing users with accurate error messages. The project's objective was to fulfill the specific needs of the Centre d’Accès à la Technologie en Bio-innovation (CAT-B) at La Cité college, which aimed to streamline plantule management processes. This application replaces manual methods, enhancing accuracy, traceability, and efficiency. Throughout this project, I utilized complex WPF components like 'DataGrid' and integrated Entity Framework Core for seamless database interactions. This experience not only improved my technical skills but also taught me valuable lessons in time management and meeting client deadlines.",
    skills: ["WPF", "C#", "SQL Server"],
    source: "https://github.com/2709725KHOUDALI/projetCannabis.git"
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="flex flex-col items-center py-10 bg-gray-100 p-5" id="projects">
      <div className="flex flex-col items-center w-full max-w-5xl gap-6 ">
        <h2 className="text-4xl font-semibold text-center mt-24 text-gray-600">Projects</h2>
        <div className="flex justify-between gap-6 flex-wrap md:flex-nowrap">
          {projects.map((project, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 bg-white border border-gray-300 shadow-lg rounded-lg p-6 mb-4 flex flex-col items-center">
              <img src={project.imageSrc} alt={project.title} className="rounded-t-lg" style={{ width: 'auto', height: '30%' }} />
              <h3 className="text-2xl font-semibold mb-3 text-gray-700">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="text-gray-600 font-medium mb-3">
                <strong>Technologies:</strong>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-200 border border-gray-300 rounded-lg text-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => openModal(project)} className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-silver-500 hover:bg-slate-200 text-black font-bold">See More</button>
                <a href={project.source} className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-silver-500 hover:bg-slate-200 text-black font-bold">Source</a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h3 className="text-2xl font-semibold mb-3 text-gray-700">{selectedProject.title}</h3>
            <p className="text-gray-600 mb-3">{selectedProject.detailedDescription}</p>
            <button onClick={closeModal} className="px-6 py-3 rounded-full bg-gradient-to-br from-purple-500 to-silver-500 hover:bg-slate-200 text-black font-bold">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
