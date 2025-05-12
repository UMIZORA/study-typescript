import Link from "next/link";
import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./sanpai.module.css"



const Sanpai: NextPage = () => {

  return (
    <>
      <Header />


      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>お祭り・ご祈祷</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>
          <h3>お祭り<span>（一部）</span></h3>

          <div className={styles.schedule_txt}>
            <div className={styles.schedule_flex}>
              <div><p>1月1日</p></div>
              <div><p>歳旦祭</p></div>
            </div>

            <div className={styles.schedule_flex}>
              <div><p>2月3日</p></div>
              <div><p>節分祭</p></div>
            </div>

            <div className={styles.schedule_flex}>
              <div><p>2月2の午</p></div>
              <div><p>祈年祭・末社例祭<span>（稲荷神社・三峯神社・子の権現）</span></p></div>
            </div>

            <div className={styles.schedule_flex}>
              <div><p>9月吉日</p></div>
              <div><p>例祭<span>（宵宮祭・大祭）</span></p></div>
            </div>

            <div className={styles.schedule_flex}>
              <div><p>11月25日</p></div>
              <div><p>新嘗祭・摂社 天神社例祭</p></div>
            </div>
          </div>


          <h3>ご祈祷のご案内</h3>

          <div className={styles.prayer_block}>

            <div className={styles.prayer_txt}>
              <p>神社は神様のいらっしゃる神聖なところですが、決して特別な場所ではありません。</p>
              <p>お子様の誕生や成人式、還暦のお祝いなど人生の節目節目はもちろんのこと、知り合いが病気になった、車を買ったなど、日常のちょっとした出来事を神様にご奉告したり、お祓いをしたりするところなのです。皆様の日々の暮らしの中に「神社」を入れてみてください。きっと心豊かな暮らしになるはずです。</p>
            </div>
            <div className={styles.prayer_emphasis}><p>各種ご祈祷・お祓いを受け付けております</p></div>
            <div className={styles.prayer_kinds}>
              <div>
                <p>商売繁盛</p>
                <p>社運隆盛</p>
                <p>職場安全</p>
                <p>開運招福</p>
                <p>家内安全</p>
                <p>無病息災</p>
                <p>病気平癒</p>
                <p>厄除</p>
                <p>交通安全</p>
                <p>旅行安全</p>
                <p>学業成就</p>
                <p>合格祈願</p>
                <p>心願成就</p>
                <p>縁結び</p>
                <p>人形清祓</p>
                <p>車祓</p>
                <p>安産祈願</p>
                <p>初宮詣</p>
                <p>七五三詣</p>
                <p>成人式</p>
                <p>年祝い</p>
                <p>神棚祓い</p>
                <p>地鎮祭</p>
                <p>上棟際</p>
                <p>竣工祭</p>
                <p>解体祓</p>
                <p>事故清祓</p>
                <p><Link href="../bridal/">神前結婚式</Link></p>
              </div>
              <p className={styles.kinds_info}>その他ご要望の祈願がございましたらお申し付けください。</p>
            </div>

            <h4>受付方法</h4>
            <p className={styles.reception_tel}><span>TEL</span>03-3371-7324</p>
            <p className={styles.reception_info}>事前予約を推奨しております。お電話にてお申し込みください。<br />当日のお申し込みでもご祈祷を承ります。</p>
            <div className={styles.reception_caution}>
              <h5>注意事項</h5>
              <p>※ ご祈祷中の撮影は原則禁止となります。<br />
                ※ 玉串料(初穂料)とは神様にご奉納する”お気持ち”であり、決まりはございませんが、目安として1万円前後をお考えください。熨斗袋にいれてお持ちください。<br />
                  ※ お時間に余裕を持ってご来社ください。</p>
              </div>

            </div>

        </section>

      </section>


      <Footer />

    </>
  );
}




export default Sanpai;