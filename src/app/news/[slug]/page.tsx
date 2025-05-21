import { Header } from "@/components/Header/page";
import { Footer } from "@/components/Footer/page";
import { notFound } from "next/navigation";
import { format } from 'date-fns';

import Image from "next/image";
import styles from "./newsslug.module.css"
import Link from "next/link";

export async function generateStaticParams() {

  const headers = { "Content-Type": "application/json" }
  const baseURL: string = process.env.NEXT_PUBLIC_WPENDPOINT_URL!;

  const limit = 10;
  const query = `query NewQuery {
  newsss {
    edges {
      node {
        slug
      }
    }
  }
}`;

  const res = await fetch(baseURL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables: { limit }
    }),
  })

  const json = await res.json();
  if (json.errors) {
    console.error("エラーです！");
    throw new Error("Failed to fetch API")
  }

  const num = json.data.newsss.edges

  const important: [] = num.map((data: { node: { slug: string } }) => {
    return { slug: data.node.slug }
  });

  return important

}


export default async function NewsArticle({ params }: { params: { slug: string } }) {
  const res = await params;


  const imgURL: string = process.env.NEXT_PUBLIC_WPIMGPATH_URL!;
  const headers = { "Content-Type": "application/json" }
  const baseURL: string = process.env.NEXT_PUBLIC_WPENDPOINT_URL!;


  type pathType = {
    filePath: string
  }

  type imgType = {
    node: pathType
  }

  type queryType = {
    mainImg: imgType
  }

  type nodeType = {
    title: string
    content: string
    date: string
    queryNEWS: queryType
    slug: string
  }

  type PostType = {
    node: nodeType
  }

  const slugId = res.slug;
  const query = `query PostQuery($id: ID!) {
  news(id: $id, idType: SLUG){
    content
        date
        queryNEWS {
          mainImg {
            node {
              filePath
            }
          }
        }
        title
        slug
  }
}`;

  const response = await fetch(baseURL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables: { id: slugId }
    }),
  })

  const json = await response.json();
  if (json.errors) {
    console.error("エラーです！");
    throw new Error("Failed to fetch API")
  }

  const jsonTxt = json.data.news
  console.log(jsonTxt)


  return (
    <>
      <Header></Header>

      <section className={styles.main_block}>
        <div className={styles.main_block_bg}>
          <h2>お知らせ</h2>
        </div>
      </section>

      <section className={styles.white_bg}>
        <section className={styles.content_block}>

          <div className={styles.article_block}>
            <div className={styles.article_title}><h3>{jsonTxt.title}</h3></div>
            <div className={styles.article_img}><Image src={imgURL + jsonTxt.queryNEWS.mainImg.node.filePath} alt={jsonTxt.title} width={720} height={480} className={styles.auto} /></div>
            <div className={styles.article_date}><p>{format(jsonTxt.date, 'yyyy.MM.dd')}</p></div>
            <div className={styles.article_txt} dangerouslySetInnerHTML={{ __html: jsonTxt.content }}></div>
          </div>

          <div className={styles.article_link}><Link href="../../news/">お知らせ一覧へ戻る</Link></div>

        </section>
      </section>

      <Footer></Footer>
    </>
  )

}
