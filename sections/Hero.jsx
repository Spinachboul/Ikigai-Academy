'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} relative mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          IKIGAI
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>ACADEMY</h1>
        </motion.div>
      </div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="absolute w-full md:-mt-[20px]"
      >
        <div className="relative">
          <img
            src="/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[1000px] object-contain rounded-tl-[140px] z-10 relative"
          />
          <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] absolute top-10 z-10">
            <img
              src="/stamp.png"
              alt="stamp"
              className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
            />
          </div>
        </div>

      </motion.div>
    </motion.div>
  </section>
);

export default Hero;
