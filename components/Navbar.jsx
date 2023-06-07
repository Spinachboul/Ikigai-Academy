'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import logo from '../public/logo.png';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-4 relative shadow-md shadow-red-800`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Image
        src={logo}
        alt="logo"
        className="w-[120px] object-contain shadow-lg shadow-red-800 rounded-lg"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white flex items-center">
        IKIGAI  ACADEMY
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
