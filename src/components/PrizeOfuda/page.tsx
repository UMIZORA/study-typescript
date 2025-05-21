"use client"

import Image from "next/image";
import { NextPage } from 'next';
import { useState, useEffect } from 'react';

import styles from "@/components/PrizeOfuda/prizeofuda.module.css"

async function fetchAPI(query="", { variables }: Record<string, number> = {}){
  const headers = { "Content-Type": "application/json" }
  // エンドポイントURL：　https://www.yoroi.umizora.co.jp/wp/graphql　　`${process.env.NEXT_PUBLIC_WPENDPOINT_URL}`

  const baseURL:string = process.env.NEXT_PUBLIC_WPENDPOINT_URL!;
  const res = await fetch( baseURL ,{
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json();
  if(json.errors){
    console.error("エラーです！");
    throw new Error("Failed to fetch API")
  }
  return json.data.items.edges

}


const PrizeOfuda: NextPage = () => {

  const imgURL:string = process.env.NEXT_PUBLIC_WPIMGPATH_URL!;

  type pathType = {
    filePath: string
  }

  type imgType = {
    node: pathType
  }

  type queryType = {
    itemCate: string
    itemPrice: number
    itemImg:imgType
  }

 type nodeType = {
  title: string
  queryACF: queryType
 }

  type PostType = {
    node: nodeType
  }

  const [data, setData] = useState<PostType[]>([]);
  
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetchAPI(`query NewQuery {
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
      }`)
      setData(response);
    }
    getTodos();

  }, []);

  const postDate = data.filter((info) => {
    return info.node.queryACF.itemCate === "item_ofuda";
  }) 
  

  console.log(postDate);

  return (
    <>

      <div className={styles.card_flex}>
        { postDate ? (postDate.map((post,index) => { return(
            <div key={index} >
              <div><Image src={imgURL + post.node.queryACF.itemImg.node.filePath}  alt={post.node.title} width={200} height={200} /></div>
              <div>
                <h4>{ post.node.title }</h4>
                <p className={styles.card_price}>初穂料：{ post.node.queryACF.itemPrice }円</p>
              </div>
            </div>
        )} ) ) : ( <div></div> ) }

        </div>

    </>
  );

};


export default PrizeOfuda;