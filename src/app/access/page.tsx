import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./access.module.css"



const Access: NextPage = () => {

  return (
    <>
      <Header />


      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>アクセス</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>
          <h3>鎧神社 <span>Yoroi Shrine</span></h3>
          <p>〒169-0074 東京都新宿区北新宿3-16-18</p>

          <div className={styles.access_txt}>
            <h4 className={styles.icon_train}>電車でお越しの方</h4>
            <p>JR大久保駅から徒歩11分<br />JR・都営大江戸線東中野駅から徒歩14分</p>
          </div>

          <div className={styles.access_txt}>
            <h4 className={styles.icon_car}>車でお越しの方</h4>
            <p>駐車場はございません<br />近くのコインパーキングをご利用ください<br /><span>※近くに３箇所あります</span></p>
            </div>

              <div className={styles.map_block}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1742.2373248228027!2d139.69056508204014!3d35.70453339043746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d33273c8135%3A0xedeaff9595b27896!2z6Y6n56We56S-!5e0!3m2!1sja!2sjp!4v1703062690728!5m2!1sja!2sjp" width={720} height={420} loading="lazy"></iframe>
              </div>
              <div className={styles.to_googlemap}><p><a href="https://maps.app.goo.gl/PjjeQWhRxSuthk3F8" target="_blank">Google Mapでみる</a></p></div>

            </section>

            </section>


            <Footer />

          </>
          );
}




          export default Access;