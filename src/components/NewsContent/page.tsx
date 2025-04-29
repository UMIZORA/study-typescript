"use client"

import { NextPage } from 'next';
import { useState, useEffect } from 'react';

import styles from "@/components/NewsContent/newscontent.module.css"

async function fetchAPI(query="", { variables }: Record<string, any> = {}){
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
  //return json.data.items.edges.map((data:any) =>{
    //return data.node
  //});

}



const NewsContent: NextPage = () => {

  const imgURL:string = process.env.NEXT_PUBLIC_WPIMGPATH_URL!;

  type PostType = {
    node: any
    title: string
    itemCate: string
    itemPrice: number
    filePath: string
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

/*
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
    ).then(data => { console.log(data[0].node.title); setData(data)});
  
  },[]);
*/

  console.log(data);

  return (
    <>
      <div className={ styles.newsBlock }>
      { data ? (data.map((post) => { return(
        <div key={post.node.title} >
          <p>{ post.node.title }</p>
          <img src={imgURL + post.node.queryACF.itemImg.node.filePath} />
          <p>{ post.node.queryACF.itemPrice }円</p>
        </div>
      )} ) ) : ( <div></div> ) }

      </div>
    </>
  );

};

//<div key={JSON.stringify(data)}>{JSON.stringify(data)}</div>

export default NewsContent;