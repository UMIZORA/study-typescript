import Image from "next/image";
import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./map.module.css"

import getConfig from "next/config";
const { basePath } = getConfig().publicRuntimeConfig;



const Map: NextPage = () => {

  return (
    <>
      <Header />


      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>境内さんぽ</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>
          <h3>境内案内</h3>

          <div className={styles.map_flex}>
            <div><Image src={`${basePath}/map/map01.jpg`} alt="社殿" className={styles.auto} width={500} height={375} /></div>
            <div>
              <h4>社殿</h4>
              <p>拝礼をするための拝殿と神様がいらっしゃる本殿とがあります。<br />二礼二拍手一礼の作法でお参りしましょう。</p>
            </div>
          </div>

          <div className={styles.map_flex}>
            <div><Image src={`${basePath}/map/map02.jpg`} alt="鳥居" className={styles.auto} width={500} height={375} /></div>
            <div>
              <h4>鳥居</h4>
              <p>境内入り口にある明神鳥居は平成8年に再造営されたものです。<br />
                鳥居から先は神様のいらっしゃる聖域です。身支度を整えてから入りましょう。</p>
            </div>
          </div>

          <div className={styles.map_flex}>
            <div><Image src={`${basePath}/map/map03.jpg`} alt="手水舎" className={styles.auto} width={500} height={375} /></div>
            <div>
              <h4>手水舎</h4>
              <p>参拝前に身体を清めるところです。左手、右手、口の順に洗い清め、参拝の準備をしてください。</p>
            </div>
          </div>

          <div className={styles.map_flex}>
            <div><Image src={`${basePath}/map/map04.jpg`} alt="摂社 天神社" className={styles.auto} width={500} height={375} /></div>
            <div>
              <h4>摂社 天神社</h4>
              <p>御祭神 菅原道真公<br />
                学問の神様・菅原道真をお祀りする摂社です。もともとは柏木北公園に鎮座しており、明治中頃に遷座されました。成子天神の元の社であることから元天神とも言われます。祭日は11月25日です。</p>
            </div>
          </div>

          <div className={styles.map_flex}>
            <div><Image src={`${basePath}/map/map05.jpg`} alt="狛犬型庚申塔" className={styles.auto} width={500} height={375} /></div>
            <div>
              <h4 className={styles.letter_s}>狛犬型庚申塔<br className={styles.forsp} /><span>新宿区指定有形民俗文化財</span></h4>
              <p>天神社の両脇にある狛犬は、全国的にも非常に珍しい狛犬型庚申塔です。造営は享保6年（1721）で、向かって右側が阿形像（雄）、左側は叫形像（雌）。江戸西郊の農村文化がうかがえる造型で民俗学的にも貴重な資料です。</p>
            </div>
          </div>

          <div className={styles.map_flex}>
            <div><Image src={`${basePath}/map/map06.jpg`} alt="末社" className={styles.auto} width={500} height={375} /></div>
            <div>
              <h4>末社</h4>
              <p>稲荷神社 御祭神 宇迦御魂命<br />三峯神社 御祭神 伊弊諾命、伊芽冊命<br />子の権現 御祭神 大国主命<br />
                裏参道にある末社です。三神が合祀されています。祭日は2月2日の午の日です。</p>
              </div>
              </div>

              </section>


            </section>

            <Footer />

          </>
          );
}




          export default Map;