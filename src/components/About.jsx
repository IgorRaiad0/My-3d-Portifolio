import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profilePhoto from "../assets/profile.jpeg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <img 
          src={profilePhoto} 
          alt="Profile" 
          className='w-48 h-64 rounded-2xl object-cover mb-4'
        />
        
        <div className='flex gap-4 items-center mb-6'>
          <a 
            href='https://github.com/seu-usuario' 
            target='_blank' 
            rel='noopener noreferrer'
            className='text-white hover:text-[#0000E8] transition-colors text-2xl'
          >
            <i className='fab fa-github'></i>
          </a>

          <a 
            href='https://linkedin.com/in/seu-usuario' 
            target='_blank' 
            rel='noopener noreferrer'
            className='text-white hover:text-[#0000E8] transition-colors text-2xl'
          >
            <i className='fab fa-linkedin'></i>
          </a>

          <a 
            href='https://linkedin.com/in/seu-usuario' 
            target='_blank' 
            rel='noopener noreferrer'
            className='text-white hover:text-[#0000E8] transition-colors text-2xl'
          >
            <i className='fab fa-instagram'></i>
          </a>

          <a 
            href='https://linkedin.com/in/seu-usuario' 
            target='_blank' 
            rel='noopener noreferrer'
            className='text-white hover:text-[#0000E8] transition-colors text-2xl'
          >
            <i className='fab fa-youtube'></i>
          </a>

          <a 
            href='/curriculo.pdf' 
            download 
            className='inline-flex items-center gap-2 border-2 border-[#fff] text-white hover:bg-[#0000E8] hover:border-[#0000E8] font-medium py-2 px-5 rounded-full transition-all ml-4'
          >
            <i className='fas fa-download'></i>
            Download Currículo
          </a>
        </div>
        
        <h2 className={styles.sectionHeadText}>Resumo</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam modi alias pariatur recusandae? Fuga, dicta qui cupiditate sequi ex necessitatibus eligendi rerum, cumque numquam natus neque, deleniti veniam repellendus? Nobis!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");