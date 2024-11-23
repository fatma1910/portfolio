"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { projectsData } from "../../../constant";
import { fadeIn } from "../../../variants";


const ProjectsSection = () => {
  const ref = useRef(null);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      
      <ul ref={ref} className="grid md:grid-cols-2 gap-16 ">
        {projectsData.map((project, index) => (
          <motion.li
          variants={fadeIn('up' , 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true , amount: 0.2 }}
            key={index}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              skills={project.skills}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;