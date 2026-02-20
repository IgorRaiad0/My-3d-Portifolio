import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePhoto from "../assets/profile.jpeg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start mb-16 lg:mb-20">
        <motion.div
          variants={textVariant()}
          className="flex flex-col items-center min-w-[220px] lg:min-w-[280px] lg:items-start"
        >
          <img
            src={profilePhoto}
            alt="Profile"
            className="w-96 h-96 rounded-full object-contain object-center mb-6 shadow-lg border-4 border-white"
          />

          <div className="flex gap-5 items-center mb-6 flex-wrap justify-center lg:justify-start">
            <a
              href="https://github.com/IgorRaiad0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0000E8] transition-colors text-3xl"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0000E8] transition-colors text-3xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://instagram.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0000E8] transition-colors text-3xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://youtube.com/seu-canal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#0000E8] transition-colors text-3xl"
            >
              <i className="fab fa-youtube"></i>
            </a>

            <a
              href="/curriculo.pdf"
              download
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-[#0000E8] hover:border-[#0000E8] font-medium py-2 px-5 rounded-full transition-all mt-3 lg:mt-0"
            >
              <i className="fas fa-download"></i>
              Download Currículo
            </a>
          </div>
        </motion.div>

        <div className="flex-1 w-full lg:w-auto">
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Resumo</h2>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-6 text-secondary text-[17px] max-w-4xl leading-[30px] text-justify"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi alias pariatur recusandae? Fuga, dicta qui cupiditate sequi ex necessitatibus eligendi rerum, cumque numquam natus neque, deleniti veniam repellendus? Nobis!
          </motion.p>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap gap-10 justify-center">
          {services.map((service, index) => (
            <ServiceCard key={`service-${service.title}`} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "sobre");