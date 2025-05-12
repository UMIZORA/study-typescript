import Image from "next/image";
import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "./history.module.css"

import getConfig from "next/config";
const { basePath } = getConfig().publicRuntimeConfig;


const History: NextPage = () => {

  return (
    <>
      <Header />


      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>鎧神社ものがたり</h2>
        </div>
      </section>

      <section className={styles.white_bg}>

        <section className={styles.content_block}>
          <h3>伝説の社の歴史を辿る</h3>

          <div className={styles.history_txt}>
            <p>当社の創建は、約千百年前に遡ります。 醍醐天皇の時代（898～929）、理源大師の徒弟である 筑波の貞崇僧都、行基作と伝えられる薬師如来像がこの地に祀られ、円照寺が創建されました。 当時は神仏習合といって、神社とお寺が密接につながっていた時代でした。 その際、寺の鬼門鎮護のため当社が創建されたと伝えられています。</p>
            <p>また創建以前から、この地は一つの伝説が伝えられていました。 それによると、武の神様として名高い日本武命が天皇の命によって東国の平定に向かったとき、当地に甲冑六具を蔵めた（しまいかくした）というのです。</p>

            <div className={styles.history_flex}>
              <div><Image src={`${basePath}/history/history_photo01.gif`} className={styles.auto} width={308} height={300} alt="江戸名所図会" /></div>
              <div><p>江戸名所図会には、「相伝ふ、藤原秀郷将門を誅戮し凱旋の後、将門の鎧をこの地に埋蔵し、上に禿倉を建てて鎧明神と称すというふ。社前に兜松と称する古松あり。これも兜を埋めたる印と云ふ。」と記されている。</p></div>
            </div>

            <p>鎧にまつわる話はこれだけではありません。 天慶三年（940）、関東に威をとなえていた平将門公が藤原秀郷によって討たれると、この地の人々はその死を悼み、天暦元年（947）、将門公の鎧もまた当地に埋めたと言われています。</p>

            <div className={styles.history_flex}>
              <div><Image src={`${basePath}/history/history_photo02.jpg`} className={styles.auto} width={308} height={230} alt="円照寺" /></div>
              <div><p>当社の近くに今も残る円照寺。</p></div>
            </div>

            <p>また一説によると、将門公を討った後、重病となった藤原秀郷が、 将門公の神霊の崇りであると恐れ、薬師如来を本尊とする円照寺に参詣し、将門公の鎧を埋め、祠を建ててその霊を弔ったところ、 病気がたちまち治ったと言われます。 それを聞いた人々はその御神徳に恐れ畏み、以後、村の鎮守の社として近隣の尊崇をうけてきたと伝えています。 これらのことから、「鎧」の社名が起こったと伝えられています。</p>
            <p>伝説の社として、今も静かに人々の暮らしを護られています。</p>
          </div>
        </section>

      </section>




      <Footer />

    </>
  );
}


export default History;