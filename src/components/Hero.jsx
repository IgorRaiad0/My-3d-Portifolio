import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>

      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

        <div className='flex flex-col justify-center items-center mt-5'>

          <div className='w-5 h-5 rounded-full bg-[#0000E8]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-[#0000E8] to-transparent' />

        </div>

        <div>

          <h1 className={`${styles.heroHeadText} text-white`}>
            Oi, sou <span className='text-[#0000E8]'>Igor</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Estudante de ADS <br className='sm:block hidden' />
            pelo Instituto Federal 
          </p>

        </div>
        
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-2 bottom-10 w-full flex justify-center items-center'>

        <a href='#about'>

          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#0000E8] flex justify-center items-start p-2 margin-top'>

            <motion.div

              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-[#0000E8] mb-1'
            />

          </div>

        </a>

      </div>

    </section>
  );
};

export default Hero;