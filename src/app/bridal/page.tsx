import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./bridal.module.css"


const Bridal: NextPage = () => {

  return (
    <>
      <Header />

      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>神前結婚式</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>
          <h3>感謝の気持ちを捧げ、絆を結ぶ儀式</h3>

          <div className={styles.txt_block}>
            <p>日本の国と多くの神様を産まれた伊弉諾尊（いざなぎのみこと）と伊弉冉尊（いざなみのみこと）。『古事記』『日本書紀』に描かれるこの二神の結婚の儀式が神前結婚式のはじまりです。</p>
          </div>

          <div className={styles.subtitle}><p>神社で結婚式を挙げること</p></div>

          <div className={styles.txt_block}>
            <p>古来より受け継がれた伝統の挙式には特別な意味があります。それは「感謝」を伝える儀式ということ。</p>
            <p>今まで支えてくれたご両親、ご親戚、ご友人、そして、この地に生まれ、これまでの生活をお護りくださった神様への感謝…</p>
            <p>神前結婚式は神様や皆様の前で感謝のこころを伝え、お二人の新たな生活をはじめることなのです。</p>
          </div>

          <div className={styles.info_block}>
            <div>
              <p>挙式時間</p>
              <p>約30分</p>
            </div>
            <div>
              <p>ご参列可能人数</p>
              <p>20名</p>
            </div>
            <div>
              <p>玉串料（挙式費用）</p>
              <p>５万円〜</p>
            </div>
          </div>

          <div className={styles.contact_block}>
            <h4>お問い合わせ</h4>
            <p>詳しくは下記までお問い合わせください。</p>
            <p className={styles.s_title}>鎧神社社務所</p>
            <p>〒169-0074 東京都新宿区北新宿3-16-18<br />TEL 03-3371-7324 FAX 03-5358-9011</p>
          </div>

          <div className={styles.contact_block}>
            <h4>ご衣装・美容・着付け</h4>
            <p className={styles.s_title}>ワタナベウエディング　新宿ドレスサロン</p>
            <p>TEL 0120-85-7508 FAX 03-5312-4117<br />営業時間 11:00～19:30</p>
          </div>

          <div className={styles.contact_block}>
            <h4>カメラマン</h4>
            <p className={styles.s_title}>ルミエール</p>
            <p>TEL 03-5305-5660 FAX 03-5305-5661<br />営業時間 11:00～19:00</p>
          </div>

        </section>

      </section>

      <Footer />

    </>
  );
}



export default Bridal;