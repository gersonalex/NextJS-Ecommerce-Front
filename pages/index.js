import Head from "next/head";
import { PRODUCT_QUERY } from "../lib/query";
import { useQuery } from "urql";

export default function Home() {

  //Fetch prodcuts from strapi 
  const [results] = useQuery({query: PRODUCT_QUERY})
  const {data, fetching, error} = results;
  
  //check for the data coming in
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Error {error.message}</p>

  console.log(results)

  return (
    <div>
      <Head>
        <title>Styled components</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello from NextJS</h1>
      </main>
    </div>
  );
}
