import Image from "next/image";
import Link from "next/link";
import type { NextPage } from "next";
import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";

import styles from "@/app/page.module.css"

import getConfig from "next/config";
const {basePath} = getConfig().publicRuntimeConfig;

import NewsContent from "@/components/NewsContent/page";


// エンドポイントURL：　https://www.yoroi.umizora.co.jp/wp/graphql　　`${process.env.WORDPRESS_API_URL}`
//const API_URL = process.env.WORDPRESS_API_URL;

/*
async function fetchAPI(query="", { variables }: Record<string, any> = {}){
  const headers = { "Content-Type": "application/json" }

  const res = await fetch("https://www.yoroi.umizora.co.jp/wp/graphql", {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json();
  if(json.errors){
    console.error(json.errors);
    throw new Error("Failed to fetch API")
  }
  return json.data.items.edges.map((data:any) =>{
    return data.node
  });

}
*/








const Home: NextPage = () => {
  /*
  const FetchData = () => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
  fetchAPI(`query NewQuery {
    items {
      edges {
        node {
          queryACF {
            itemCate
            itemPrice
            itemImg {
              node {
                filePath
              }
            }
          }
          title
        }
      }
    }
  }`
    ).then(item => { console.log(item); setData(item) });

  });


  //console.log(wpTxt);


  //PostService.getList().then((data) => console.log(data), (error) => { console.log("エラーです") } )

  //const wpTxt = PostService.getList().then((data) => {return data}, (error) => { console.log("エラーです") } )
  //console.log( wpTxt )



/*
fetchAPI(
    `query NewQuery {
  items {
    edges {
      node {
        queryACF {
          itemCate
          itemPrice
          itemImg {
            node {
              filePath
            }
          }
        }
        title
      }
    }
  }
}`
  ).then((data) => { console.log(data) });
*/

  return (
    <>
        <Header />

        <section className={styles.main_movie}>
          <div className={styles.movie_block}>
            <video playsInline muted autoPlay loop>
              <source src="movie/movie.mp4" type="video/mp4" />
              <source src="movie/movie.webm" type="video/webm" />
            </video>
    
            <div className={styles.movie_txt}>
              <h2>北新宿総鎮守<br />閑静な住宅街に佇む緑あふれる神域</h2>
              <h3><Image src={`${basePath}/logo.png`} alt="鎧神社" width={460} height={98} /></h3>
              <p>Yoroi Jinjya</p>
            </div>
          </div>
        </section>
    
        <NewsContent />

        <section className={styles.copy_block}>
          <div className={styles.copy_content}>
          <h2>ようこそ鎧神社公式サイトへ</h2>
          <p>
          ＪＲ大久保駅と東中野駅の中間の地である北新宿。<br className={styles.nosp} />
          新宿に近いとは思えないほど、閑静な住宅地が広がっているところに当社は鎮座しております。
          </p>
          <p>
          日本神話の悲劇のヒーロー・日本武命関東の英雄・平将門公。<br className={styles.nosp} />
          その鎧が当社の地には眠っていると古来より言い伝えられ、<br className={styles.nosp} />
          人々の崇敬を集めてまいりました。<br />
          </p>
          <p>
          伝説の地・鎧神社へ、<br className={styles.nosp} />
          社殿で手を合わせれば、悠久の歴史を感じられます。
          </p>
          </div>
    
          <div className={styles.copy_time}>
            <p>社務所受付時間： 10時〜17時<span className={styles.copy_timeInfo}>※状況により異なる場合もございます</span></p>
          </div>
    
          <div className={styles.photo_01}><div>{/*<Image className={styles.img_parallax} src={`${basePath}/photo01.jpg`} layout="fill" objectFit="cover" alt="境内" />*/}</div></div>
        </section>
    
    
    
        <section className={styles.banner_block}>
          <div className={`${styles.banner_content} ${styles.sp_line} ${styles.image_01}`}><Link href="history/">
            <div className={styles.banner_title}><p>鎧神社ものがたり</p></div>
            <div className={styles.banner_info}><p>伝説の社の歴史を辿る</p></div>
            <div className={styles.banner_link}><p>詳しく見る ＞</p></div>
          </Link></div>
    
          <div className={`${styles.banner_content} ${styles.sp_line} ${styles.image_02}`}><Link href="shrine_deity/">
            <div className={styles.banner_title}><p>鎧神社のかみさま</p></div>
            <div className={styles.banner_info}><p>４柱の神様を<br className={styles.forsp}/>お祀りしております</p></div>
            <div className={styles.banner_link}><p>詳しく見る ＞</p></div>
          </Link></div>
    
          <div className={styles.banner_flex}>
            <div><Link href="bridal/"><Image src={`${basePath}/banner03.jpg`} width={400} height={192} alt="神前結婚式" /></Link></div>
            <div><Link href="contact/"><Image src={`${basePath}/banner04.jpg`} width={400} height={192} alt="お問い合わせ" /></Link></div>
          </div>
        </section>
        
    
        <Footer />
    
        </>
  );
}




export default Home;