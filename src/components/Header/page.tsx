"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../../components/Header/header.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pcVariants = { 
    initialValue: {x: "0%"},
    animationValue: {x: isOpen ? "0%" : "0%" }
  };
  const mobileVariants = {
    initialValue: {x: "100%", right:"0"},
    animationValue: {x: isOpen ? "0%" : "100%", right:"0"}
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice = window.innerWidth <= 900;
      setIsMobile(isMobileDevice);

      // デバイスの種類をコンソールに表示
      if (isMobileDevice) {
        console.log("Mobile device detected");
      } else {
        console.log("PC device detected");
      }
    };

    checkDevice();

    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);


  return (
    <>
      <header className={styles.header}>
	      <div className={styles.g_nav}>
	        <h1><Link href="/" className={styles.headerTitle}>鎧神社</Link></h1>
          <motion.nav animate="animationValue" initial="initialValue" variants={isMobile ? mobileVariants : pcVariants} transition={{ type: "tween", duration: 0.4, ease: "easeInOut",}}>
            <div className={styles.sp_logo}><Image src="/logo_bk.png" className={styles.imgAuto} width={200} height={42} alt="鎧神社" /></div>
            <ul className={styles.g_menu}>
            <li><Link href="/history/">鎧神社ものがたり</Link></li>
            <li><Link href="/shrine_deity/">鎧神社のかみさま</Link></li>
            <li><Link href="/prize/">授与品・御朱印</Link></li>
            <li><Link href="/sanpai/">お祭り・ご祈祷</Link></li>
            <li><Link href="/map/">境内さんぽ</Link></li>
            <li className={styles.sp_limited}><Link href="/news/">お知らせ</Link></li>
            <li className={styles.sp_limited}><Link href="/bridal/">神前結婚式</Link></li>
            <li><Link href="/access/">アクセス</Link></li>
            <li className={styles.sp_limited}><Link href="/faq/">よくあるご質問</Link></li>
            <li className={styles.sp_limited}><Link href="/contact/">お問い合わせ</Link></li>
            </ul>

		        <ul className={styles.g_sns}>
              <li><Link href="/"><Image src="/icon_facebook_bk.png" alt="facebook" className={styles.imgAuto} width={50} height={50} /></Link></li>
              <li><Link href="/"><Image src="/icon_twitter_bk.png" alt="twitter" className={styles.imgAuto} width={50} height={50} /></Link></li>
              <li><Link href="/"><Image src="/icon_instagram_bk.png" alt="Instagram" className={styles.imgAuto} width={50} height={50} /></Link></li>
              <li><Link href="/"><Image src="/icon_youtube_bk.png" alt="YouTube" className={styles.imgAuto} width={50} height={50}/></Link></li>
            </ul>
          </motion.nav>
        </div>

        <div className={styles.hamburgerButton} onClick={toggleMenu}>
          <motion.button whileHover={{ scale: 1.2 }} className={styles.g_button} >
            <div className={styles.navbtn}>
              <motion.span animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0, }} transition={{ type: "spring", stiffness: 100, duration: 0.4}}></motion.span>
              <motion.span animate={{ opacity: isOpen ? 0 : 1, }} transition={{ type: "spring", stiffness: 100, duration: 0.4}}></motion.span>
              <motion.span animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -12 : 0,}} transition={{ type: "spring", stiffness: 100, duration: 0.4}}></motion.span>
            </div>
          </motion.button>
        </div>
        
      </header>

    </>

  );
}

