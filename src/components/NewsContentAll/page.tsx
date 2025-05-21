"use client"

import Image from "next/image";
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

import styles from "@/components/NewsContentAll/newscontentall.module.css";
import Link from "next/link";

async function fetchAPI(query = "", { variables }: Record<string, number> = {}) {
  const headers = { "Content-Type": "application/json" }
  // エンドポイントURL：　https://www.yoroi.umizora.co.jp/wp/graphql　　`${process.env.NEXT_PUBLIC_WPENDPOINT_URL}`

  const baseURL: string = process.env.NEXT_PUBLIC_WPENDPOINT_URL!;
  const res = await fetch(baseURL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json();
  if (json.errors) {
    console.error("エラーです！");
    throw new Error("Failed to fetch API")
  }
  return json.data.newsss.edges
}




const NewsContentAll: NextPage = () => {
  const imgURL: string = process.env.NEXT_PUBLIC_WPIMGPATH_URL!;

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

  const [data, setData] = useState<PostType[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetchAPI(`query NewQuery {
  newsss(first: 1000) {
    edges {
      node {
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
    }
  }
}`)
      setData(response);
    }
    getTodos();

  }, []);




  return (
    <>
      <div className={styles.newsBlock}>

        <div className={styles.news_flex}>
          {data ? (data.map((post, index) => {
            return (
              <div className={styles.newsContent} key={index} ><Link href={`/news/${post.node.slug}`}>
                <div><Image src={imgURL + post.node.queryNEWS.mainImg.node.filePath} alt={post.node.title} width={200} height={200} /></div>
                <div>
                  <p className={styles.news_date}>{format(post.node.date, 'yyyy.MM.dd')}</p>
                  <p className={styles.news_title}>{post.node.title}</p>
                  <div className={styles.news_txt} dangerouslySetInnerHTML={{ __html: post.node.content }}></div>
                </div>
              </Link></div>
            )
          })) : (<div></div>)}
        </div>

      </div>
    </>
  );

};

//<div key={JSON.stringify(data)}>{JSON.stringify(data)}</div>

export default NewsContentAll;



/*
<h3>{post.node.title}</h3>
<Image src={imgURL + post.node.queryNEWS.mainImg.node.filePath} alt="鎧神社" width={300} height={400} />
<p>{format(post.node.date, 'yyyy.MM.dd')}</p>
<div dangerouslySetInnerHTML={{ __html: post.node.content }}></div>
*/

