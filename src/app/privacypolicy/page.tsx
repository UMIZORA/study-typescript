
import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./privacypolicy.module.css"



const PrivacyPolicy: NextPage = () => {

  return (
    <>
      <Header />

      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>プライバシーポリシー</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>
          <div className={styles.txt_block}>
            <p>個人情報保護のため以下のプライバシーポリシーを定め周知徹底を図ります。</p>

            <h3>個人情報の適切な収集について</h3>
            <p>必要な範囲で個人情報を収集し、収集した情報はガイドラインに則り利用します。</p>

            <h3>個人情報の安全管理について</h3>
            <p>個人情報の漏えい･滅失･き損を防ぐため、必要かつ適切な安全管理措置を講じるとともに継続的な改善に努めます。</p>

            <h3>個人情報に関する法令及びその他の規範の遵守について</h3>
            <p>個人情報の取扱いについて、個人情報の保護に関する法律、その他個人情報保護関連法令を遵守します。</p>

            <p>以上のプライバシーポリシーを改定することがあります。その場合の改定内容は当WEBサイトに記載いたします。</p>
          </div>
      </section>

      </section>

      <Footer />

      </>
      );
}




      export default PrivacyPolicy;