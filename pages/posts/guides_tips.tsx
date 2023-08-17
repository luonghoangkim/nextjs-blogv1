 
import Head from "next/head";
import Layout from "../../components/layuot";
import ImageWithCaption from "../../components/futureTech/imageWithCaption";
import Article from "../../interface/type";
import { fetchData } from "../api/data";
import FutureListPosts from "../../components/futureTech/futurelistPosts";
import Guides_TipsPosts from "../../components/guides_tips/guides_tipsPost";

interface Props {
  articles: Article[];
}

const GuidesTips = ({ articles } : Props) => {
  return (
    <Layout>
      <Head>
        <title>Hướng dẫn & Thủ thuật</title>
      </Head> 
      <Guides_TipsPosts articles={articles}/>
    </Layout>
  );
}

export default GuidesTips;

export async function getStaticProps() {
  const articles = await fetchData();
  return {
    props: {
      articles,
    },
  };
}


