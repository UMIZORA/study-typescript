import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./prize.module.css"

const Prize: NextPage = () => {

  return (
    <>
        <Header />


        <div className={styles.title}><p>「授与品・御朱印」ページです</p></div>

    
        <Footer />
    
    </>
  );
}




export default Prize;