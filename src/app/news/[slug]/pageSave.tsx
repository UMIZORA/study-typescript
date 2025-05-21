//標準的な書き方として
//この書き方だと出しわけがうまくできている

//20250519 このやり方でうまく動的ルーティングのページが表示されるようになった！ ex) news-124

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
  
  console.log("テストです")

  const important:[] = num.map((data: { node: { slug: string } }) => {
    return { slug: data.node.slug }
  });

  return important





  /*
  num.forEach((data: { node: { slug: any; }; }) => {
    console.log(data.node.slug);
  });

  return num.map((data: { slug: string; }) => ({
    slug: data.slug
  }));



  const testTest = respon.map(((data) => ({
    slug: data.slug
  })));

  console.log(testTest)
  

  


  const respon = [
    { slug: '1', title:"１の文章になります" },
    { slug: '2', title:"２の文章になります" },
    { slug: '3', title:"３の文章になります" },
  ];

  return respon.map(((data) => ({
    slug : data.slug
  })));
  */
  
}


export default async function NewsArticle ({ params }: { params: {slug: string} }) {
  const res = await params;

  return (
    <>
      <div>このスラッグは { res.slug } の内容になります</div>
    </>
  )

}




async function fetchAPI(query = "", { variables }: Record<string, number> = {}) {
  const headers = { "Content-Type": "application/json" }
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
