import Head from "next/head";
import Layout from "../../components/layuot"; 
import ImageWithCaption from "../../components/futureTech/imageWithCaption"; 
import Article from "../../interface/type"; 
import { fetchData } from "../../lib/data";
import FutureListPosts from "../../components/futureTech/futurelistPosts";

interface Props {
  articles: Article[];
}

const FutureTech: React.FC<Props> = ({articles}) => {
  return (
    <Layout>
        <Head>
          <title>Công nghệ tương lai</title>
        </Head>
        <ImageWithCaption/> 
        <FutureListPosts articles={articles}/>
    </Layout>
  );
}

export default FutureTech;

export async function getStaticProps() {
  const articles = await fetchData();
  return {
    props: {
      articles,
    },
  };
}
