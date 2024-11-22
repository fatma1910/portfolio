"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../../variants";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactMe = () => {
  return (
    <section id="contact" className="py-16 px-4 sm:py-24 sm:px-16 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contact Me</h2>
          <p className="text-base sm:text-lg text-[#ADB7BE] mb-10">
            Feel free to connect with me through any of the platforms below!
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="flex justify-center gap-8 text-4xl"
        >
          {/* GitHub */}
          <a
            href="https://github.com/fatma1910"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/fatma-saleh-77497b249/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          {/* Gmail */}
          <a
            href="mailto:fatmasaleh567@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition duration-300"
            aria-label="Gmail"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
