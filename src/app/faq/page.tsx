import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./faq.module.css"


const Faq: NextPage = () => {

  return (
    <>
      <Header />


      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>よくあるご質問</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>

          <div className={styles.faq_block}>
            <input id="block-01" type="checkbox" className={styles.toggle} />
              <label className={styles.q_block} htmlFor="block-01"><p>ペットを連れてお参りしてもよいでしょうか？</p></label>
              <div className={styles.a_block}><p>厳粛な祭祀を執り行い、皆様に清々しくお参りいただく場所ですので、飼い主の方の責任のもと、他の方へご迷惑をおかけすることがないよう十分に留意してご参拝ください。</p></div>
          </div>

          <div className={styles.faq_block}>
            <input id="block-02" type="checkbox" className={styles.toggle} />
              <label className={styles.q_block} htmlFor="block-02"><p>ペットを連れてお参りしてもよいでしょうか？</p></label>
              <div className={styles.a_block}><p>厳粛な祭祀を執り行い、皆様に清々しくお参りいただく場所ですので、飼い主の方の責任のもと、他の方へご迷惑をおかけすることがないよう十分に留意してご参拝ください。</p></div>
          </div>

          <div className={styles.faq_block}>
            <input id="block-03" type="checkbox" className={styles.toggle} />
              <label className={styles.q_block} htmlFor="block-03"><p>ペットを連れてお参りしてもよいでしょうか？</p></label>
              <div className={styles.a_block}><p>厳粛な祭祀を執り行い、皆様に清々しくお参りいただく場所ですので、飼い主の方の責任のもと、他の方へご迷惑をおかけすることがないよう十分に留意してご参拝ください。</p></div>
          </div>

          <div className={styles.faq_block}>
            <input id="block-04" type="checkbox" className={styles.toggle} />
              <label className={styles.q_block} htmlFor="block-04"><p>ペットを連れてお参りしてもよいでしょうか？</p></label>
              <div className={styles.a_block}><p>厳粛な祭祀を執り行い、皆様に清々しくお参りいただく場所ですので、飼い主の方の責任のもと、他の方へご迷惑をおかけすることがないよう十分に留意してご参拝ください。</p></div>
          </div>

          <div className={styles.faq_block}>
            <input id="block-05" type="checkbox" className={styles.toggle} />
              <label className={styles.q_block} htmlFor="block-05"><p>ペットを連れてお参りしてもよいでしょうか？</p></label>
              <div className={styles.a_block}><p>厳粛な祭祀を執り行い、皆様に清々しくお参りいただく場所ですので、飼い主の方の責任のもと、他の方へご迷惑をおかけすることがないよう十分に留意してご参拝ください。</p></div>
          </div>

          <div className={styles.faq_block}>
            <input id="block-06" type="checkbox" className={styles.toggle} />
              <label className={styles.q_block} htmlFor="block-06"><p>ペットを連れてお参りしてもよいでしょうか？</p></label>
              <div className={styles.a_block}><p>厳粛な祭祀を執り行い、皆様に清々しくお参りいただく場所ですので、飼い主の方の責任のもと、他の方へご迷惑をおかけすることがないよう十分に留意してご参拝ください。</p></div>
          </div>

        </section>

        </section>


        <Footer />

      </>
      );
}




      export default Faq;