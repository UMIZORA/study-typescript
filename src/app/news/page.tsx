import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import NewsContentAll from "@/components/NewsContentAll/page";

import styles from "./news.module.css"


const News: NextPage = () => {

  return (
    <>
      <Header />

      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>お知らせ一覧</h2>
        </div>
      </section>

      <section className={styles.white_bg}>
        <section className={styles.content_block}>

        <NewsContentAll></NewsContentAll>

        </section>
      </section>

      <Footer />

    </>
  );
}


export default News