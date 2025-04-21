import Image from "next/image";
import styles from "../../components/Footer/footer.module.css";

import getConfig from "next/config";
const {basePath} = getConfig().publicRuntimeConfig;


export function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <h2>鎧神社</h2>
        <p className={styles.footer_address}>〒169-0074 東京都新宿区北新宿3-16-18</p>
        <div className={styles.footer_contact}>
		      <div><p><span>TEL</span> 03-3371-7324</p></div>
		      <div><p><span>FAX</span> 03-5358-9011</p></div>
	      </div>
        <p className={styles.footer_time}>お問い合わせ： 10時 〜 16時</p>
        <ul className={styles.footer_sns}>
          <li><a href="/"><Image src="img/icon_facebook_bk.png" width={30} height={30} alt="facebook" className={styles.imgauto} /></a></li>
          <li><a href="/"><Image src="img/icon_twitter_bk.png" width={30} height={30} alt="twitter" className={styles.imgauto} /></a></li>
          <li><a href="/"><Image src="img/icon_instagram_bk.png" width={30} height={30} alt="Instagram" className={styles.imgauto} /></a></li>
          <li><a href="/"><Image src="img/icon_youtube_bk.png" width={30} height={30} alt="YouTube" className={styles.imgauto} /></a></li>
        </ul>

        <div className={styles.footer_nav}>
	        <div><p><a href="privacypolicy/">プライバシーポリシー ＞</a></p></div>
	        <div><p><a href="faq/">よくあるご質問 ＞</a></p></div>
	        <div><p><a href="contact/">お問い合わせ ＞</a></p></div>
        </div>

        <small>Copyright (C) 2023 YOROI JINJA All Right Reserved</small>
      </footer>

    </>
  );
}
