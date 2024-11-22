"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { TAB_DATA } from "../../../constant";
import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
        variants={fadeIn('right' , 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false , amount: 0.2 }}
        >
          <Image src="/about.webp" width={500} height={500} alt={""} />
        </motion.div>
        
        <motion.div 
        variants={fadeIn('left' , 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false , amount: 0.2 }}
        className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Fresh graduate in Computer and Artificial Intelligence from Cairo University with a strong focus on front-end development. Proficient in modern web technologies, including Next.js, React, TypeScript, Tailwind CSS, and Framer Motion. Skilled in translating Figma designs into fully functional and responsive websites with dynamic animations and interactive features. Experienced in building e-commerce platforms, restaurant websites, and landing pages with user-friendly interfaces. Passionate about creating scalable and accessible web applications that deliver an exceptional user experience.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA?.find((t) => t.id === tab)?.content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;