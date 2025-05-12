import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./shrine_deity.module.css"



const ShrineDeity: NextPage = () => {

  return (
    <>
      <Header />

      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>鎧神社のかみさま</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>
          <h3>御神徳</h3>

          <div className={styles.divine_block}>
            <p>文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト。</p>
            <p>文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト文章テキスト。</p>
          </div>


          <h3 className={styles.title_wide}>御祭神<span>当社では、４柱の神様をお祀りしております</span></h3>

          <div className={styles.deity_block}>
            <h4>日本武命<span>やまとたけるのみこと</span></h4>
            <p>十二代景行天皇の皇子で、本命を小碓皇子（おうすのみこ）と言います。十六歳の時天皇の命により、九州の熊襲（くまそ）、東国の蝦夷（えぞ）を討伐しました。その東征の帰りに、尾張（愛知県西部）で病気となり、能褒野（三重県）で薨去されました。その時、みたまは一羽の白鳥となり天に上られたと伝えられます。 日本神話のヒーローとして知られる、「勇」の神様です。</p>
          </div>

          <div className={styles.deity_block}>
            <h4>大己貴命<span>おおなむちのみこと</span></h4>
            <p>大国主命の別名を持ち、国づくりの神様として、また出雲大社の主祭神として広く知られています。神仏習合においてはだいこく様として崇敬を集め、国土開発、夫婦和合、医療、縁結びなどに大きな力を発揮されます。因幡の白兎の説話に見られるように「仁」の神様です。</p>
          </div>

          <div className={styles.deity_block}>
            <h4>少彦名命<span>すくなひこなのみこと</span></h4>
            <p>神産巣日神の御子で、天乃羅摩船にのって波の彼方より大己貴命のもとに来訪し、国づくりに参画した神様です。身体が大変に小さく手のひらにのるほどと伝えられますが、知恵が非常にすぐれ、神仏習合ではえびす様として知られています。大己貴命とともに医薬、殖産の神様として広く尊崇される「智」の神様です。</p>
          </div>

          <div className={styles.deity_block}>
            <h4>平将門公<span>たいらのまさかどこう</span></h4>
            <p>恒武天皇五代の子孫で、延喜3年（903）に生誕。父の遺領をめぐって関東東部に起きた平氏一族の抗争は拡大し、やがて将門公は関東一円を治めるにいたります。朝廷からの関東の独立を目指し、「新皇」を名乗りましたが、ついに藤原秀郷により討たれてしまいます。民衆の味方として敬われた将門公は、死後も多くの人々の崇敬を集めています。</p>
          </div>

        </section>
      
      </section>


      <Footer />

      </>
      );
}




      export default ShrineDeity;