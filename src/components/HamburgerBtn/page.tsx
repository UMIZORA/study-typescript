"use client";

import { motion } from "framer-motion";
import styles from "../Header/header.module.css";

/*
const handleBtn = () => {
  const btn = document.getElementsByClassName("header_navbtn__oye2c");
  //btn.classList.toggle("active");
  //console.log(btn);
} 
*/

export function HamburgerBtn() {
  
  return (
    <>
        <div className={styles.hamburgerButton}>
          <button className={styles.g_button} /*onClick={() => handleBtn()} framer-motionで処理したので使っていない */ >
          <motion.div whileTap={{ scale: 1.5 }} className={styles.navbtn}><span></span><span></span><span></span></motion.div>
          </button>
        </div>
    </>

  );
}

