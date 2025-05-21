import Image from "next/image";
import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./prize.module.css"
import PrizeOfuda from "@/components/PrizeOfuda/page";
import PrizeOmamori from "@/components/PrizeOmamori/page";
import PrizeGosyuin from "@/components/PrizeGosyuin/page";

const Prize: NextPage = () => {

  return (
    <>
      <Header />

      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>授与品・御朱印</h2>
          <p>鎧神社にございます授与品・御朱印をご紹介します。</p>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>
          <h3>御神札</h3>

          <div className={styles.txt_block}>
            <p>神様をご家庭内にお祀りし、日々のご加護をお祈りするのが古くからの慣わしであります。<br />
              ご家庭内の清浄な場所にお祀りください。</p>
          </div>

          <PrizeOfuda />


          <h3>御守</h3>

          <div className={styles.txt_block}>
            <p>当社には様々なご利益をお授けくださる神様がお祀りされております。<br />
              ご自身に合う御守をお受けください。</p>
          </div>

          <PrizeOmamori />



          <h3>御朱印</h3>

          <div className={styles.txt_block}>
            <p>当社には様々なご利益をお授けくださる神様がお祀りされております。<br />
              ご自身に合う御守をお受けください。</p>
          </div>

          <PrizeGosyuin />

        </section>

      </section>


      <Footer />

    </>
  );
}


export default Prize;