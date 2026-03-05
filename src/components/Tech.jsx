import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          O que eu aprendi até agora
        </p>
        <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
          Skills
        </h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        {technologies.map((technology) => (
          <div
            className='w-28 h-28 flex flex-col items-center justify-center bg-tertiary rounded-2xl shadow-card p-4 hover:scale-110 transition-all duration-300'
            key={technology.name}
          >
            <img
              src={technology.icon}
              alt={technology.name}
              className='w-16 h-16 object-contain'
            />
            <p className="text-secondary text-[12px] mt-2 font-semibold text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");